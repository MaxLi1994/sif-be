/**
 * @fileOverview server entry point & global conf
 * @author Max
 **/

import * as express from 'express';
import './config';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as env from './utils/env-detect';
import * as jr from './utils/json-result';
jr.init();

import { router as feeds } from './business/feeds';

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", __CROSSDOMAIN__);
    next();
});

// feeds
app.use('/feeds', feeds);

app.listen(__PORT__);
console.log(`listen to ${__PORT__}`);
console.log(`server start complete`);
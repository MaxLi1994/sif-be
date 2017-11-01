/**
 * @fileOverview feeds controller
 * @author Max
 */

import * as express from 'express';
import * as _expressStatic from 'express-serve-static-core'; // https://github.com/Microsoft/TypeScript/issues/5938
import * as jr from '../../utils/json-result';

const router = express.Router();

router.all('*', (req, res, next) => {
    res.json(jr.success('hahaha'));
});

export { router };
declare module NodeJS {
    interface Global {
        [key: string]: any
    }
}

declare const __CROSSDOMAIN__: string;
declare const __PORT__: string;

/**
 * @fileOverview environment detect
 * @author Max
 */
let NODE_ENV = process.env.NODE_ENV;

export const dev = () => NODE_ENV === 'dev';
export const notDev = () => NODE_ENV !== 'dev';
export const prod = () => NODE_ENV === 'production';
export const notProd = () => NODE_ENV !== 'production';
export const test = () => NODE_ENV === 'test';
export const notTest = () => NODE_ENV !== 'test';
const { assert: { equal, deepEqual, notEqual, isFunction, isObject }} = require('chai');
const { argv: [,, ...args] } = process

describe('parse-args', () => {
    const argFunction = require('../lib/parse-args');
    describe('argFunction', () => {
        it('should exist', () => {
            isFunction(argFunction);
        });
        it('should return a property of "count"', () => {
            property({Object: {count}}, "count");
        });
    });
 
});
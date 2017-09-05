const { assert: { isNumber, property, equal, deepEqual, notEqual, isFunction, isObject }} = require('chai');
const { argv: [,, ...args] } = process

describe('parse-args', () => {
    const argFunction = require('../lib/parse-args');
    describe('argFunction', () => {
        it('should exist', () => {
            isFunction(argFunction);
        });
        it('should return a property of "count" and "sides"', () => {
            property(argFunction(args), "count");
            property(argFunction(args), "sides");
            console.log("1?", argFunction(args).count);
        });
        it('"count" should be an integer', () => {
            isNumber(argFunction([1, 2]).count);
            isNumber(argFunction([1]).count);
            isNumber(argFunction([1, 2, 3]).count);
            isNumber(argFunction(["arg"]).count, "test");
            isNumber(argFunction(["arg", "arg"]).count);
        });
        it('"sides" should be an integer', () => {
            isNumber(argFunction(["arg", "arg"]).sides);
            isNumber(argFunction([1, 2]).sides);
            isNumber(argFunction([1]).sides);
            isNumber(argFunction([1, 2, 3]).sides);
            isNumber(argFunction(["arg", "arg"]).sides);
            isNumber(argFunction(["arg", "arg"]).sides);
        });
    });
});
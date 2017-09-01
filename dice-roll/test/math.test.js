const { assert: { isNumber, equal, deepEqual, notEqual, isFunction, isObject }} = require('chai');
const { randomInt } = require('../lib/math') //(lower, upper);

describe('math', () => {
    describe('randomInt', () => {
        it('should exist', () => {
            isFunction(randomInt);
        });
        it('should return a random integer', () => {
            var randomNum = randomInt()
            isNumber(randomNum, "test");
        });
    });
});


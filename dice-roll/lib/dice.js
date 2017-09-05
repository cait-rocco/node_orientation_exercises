'use strict'

const { randomInt } = require('./math');

module.exports = function({count, sides}) {
    return {
        toDiceNotation: function({count, sides}) {
            return count + "d" + sides;
        },
        roll: function(dice) {
            var split = dice.split("d");
            var upper = (split[0] * split[1]);
            var lower = split[0];
            console.log("lower limit", lower);
            console.log("upper limit", upper);
            return randomInt(lower, upper);
        }
    };
}
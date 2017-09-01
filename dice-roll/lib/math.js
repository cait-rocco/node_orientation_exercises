'use strict';

module.exports.randomInt = (lower, upper) => {
    return Math.floor((Math.random() * upper) + lower);
};

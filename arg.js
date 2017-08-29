#!/usr/bin/env node

const userValues = process.argv;

let calculate = function(userValues) {
    userValues.splice(0, 2);
    const reducedArr = userValues.reduce(function (sum, total) {
        return Number(sum) + Number(total);
    })
    console.log("answer:", reducedArr);
}

calculate(userValues);
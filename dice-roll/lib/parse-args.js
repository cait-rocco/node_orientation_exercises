'use strict';

module.exports = (numArr) => {
    if(numArr < 1) {
        return {
            count: 1,
            sides: 6
        }
    }
    else if(numArr.length > 1) {
        return {
            count: numArr[0],
            sides: numArr[1]
        }
    } else {
        return {
            count: 1,
            sides: numArr[0]
        }
    }
}
'use strict';

module.exports = (numArr) => {
    if(numArr.length > 1) {
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
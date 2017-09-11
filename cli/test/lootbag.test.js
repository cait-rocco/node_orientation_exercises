const { assert: { isNumber, property, equal, deepEqual, notEqual, isFunction, isObject }} = require('chai');
const { addLoot, removeLoot, listNames, listToys, status } = require('../lootbag');

describe('lootbag', () => {
    describe('addLoot', () => {
        it('should exist', () => {
            isFunction(addLoot);
        });
        it('should add object that contains a name and toy to the database', () => {
            return addLoot("jonny", "car")
            .then(() => {
                return listNames("jonny")
            })
            .then((data) => {
                equal(data, ["car"]);
            })
            .then((data) => {
                deepEqual(data, ["car"])
            })
        })
    });
    describe('removeLoot', () => {
        it('should exist', () => {
            isFunction(removeLoot);
        })
    })
    describe('listNames', () => {
        it('should exist', () => {
            isFunction(listNames);
        })
        it('should output an array', () => {
            let kids = ["Timmy", "Linda", "Marcy"];
            kids.forEach((kid) => {
                return listNames("jonny")
            })
            .then((data) => {
                isArray(data)
                isArray(listNames("jonny"));
                // isArray(listNames("sally", "joey"));
            })
        })
    })
    describe('listToys', () => {
        it('should exist', () => {
            isFunction(listToys);
        })
    })
    describe('status', () => {
        it('should exist', () => {
            isFunction(status)
        })
    })
});

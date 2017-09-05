const { assert: { isNumber, property, equal, deepEqual, notEqual, isFunction, isObject }} = require('chai');
const { addLoot, removeLoot, showResults, status, ifExists } = require('../lootbag');

describe('lootbag', () => {
    describe('addLoot', () => {
        it('should exist', () => {
            isFunction(addLoot);
        });
        it('should add name and toy to the database', () => {
            exists()
        })
    });
    describe('removeLoot', () => {
        it('should exist', () => {
            isFunction(removeLoot);
        })
    })
    describe('showResults', () => {
        it('should exist', () => {
            isFunction(showResults);
        })
    })
    describe('status', () => {
        it('should exist', () => {
            isFunction(status)
        })
    })
});

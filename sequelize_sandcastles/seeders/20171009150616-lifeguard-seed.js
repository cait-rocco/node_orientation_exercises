'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Lifeguards', [{
        first_name: 'John',
        last_name: "Doe",
        createdAt: null,
        updatedAt: null
      },
    {
        first_name: "Sally",
        last_name: "Smith",
        createdAt: null,
        updatedAt: null
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

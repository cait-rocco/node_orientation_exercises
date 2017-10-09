'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Beaches', [{
        name: 'Destin',
        location: "Florida",
        sand_rating: 4,
        createdAt: null,
        updatedAt: null
      },
        {name: "Panama City",
        location: "Florida",
        sand_rating: 2,
        createdAt: null,
        updatedAt: null}], {});
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

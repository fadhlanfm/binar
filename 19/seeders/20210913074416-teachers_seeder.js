'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Teachers', [
      {
        name: 'Idrus',
        email: 'idrus@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fadhlan',
        email: 'fadhlan@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fahmi',
        email: 'fahmi@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};

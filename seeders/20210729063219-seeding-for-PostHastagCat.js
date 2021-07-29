'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('HastagCats', [
    {
      title:"Sibuk",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Capek",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Random",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Alive",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Smile",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

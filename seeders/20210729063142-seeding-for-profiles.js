'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [{
      cat_name:"Oren",
      bio:"Kucing yang barbar",
      profile_picture:"https://i.imgur.com/Lk6LVnl.jpeg",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
    return queryInterface.bulkDelete('Profiles', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

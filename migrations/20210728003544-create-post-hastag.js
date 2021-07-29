'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostHastags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PostId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Posts"
          },
          key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      HastagId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "HastagCats"
          },
          key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostHastags');
  }
};
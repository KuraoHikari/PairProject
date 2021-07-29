'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HastagCat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HastagCat.belongsToMany(models.Post , {through:'PostHastag' , foreignKey:"HastagId"})
    }
  };
  HastagCat.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HastagCat',
  });
  return HastagCat;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostHastag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostHastag.init({
    PostId: DataTypes.INTEGER,
    HastagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostHastag',
  });
  return PostHastag;
};
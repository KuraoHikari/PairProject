'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require("../helpers/bcrypt")
module.exports = (sequelize, DataTypes) => {
  class UserCat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCat.belongsTo(models.Profile , {foreignKey:"ProfileId"})
      UserCat.hasMany(models.Post)
    }
  };
  UserCat.init({
    username : DataTypes.STRING,
    password : {
      type : DataTypes.STRING,
      validate : {
        isEmpty(value) {
          if (!value) {
            throw new Error("Password can't be empty")
          }
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : true
      },
      unique : {
        args : true,
      }
    },
    phone: DataTypes.STRING,
    ProfileId: DataTypes.INTEGER
  }, {
    hooks : {
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'UserCat',
  });
  return UserCat;
};
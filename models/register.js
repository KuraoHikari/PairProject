'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require("../helpers/bcrypt")
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Register.init({
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        isEmail : true
      },
      unique : {
        args : true,
        msg : "Email address already in use!"
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        isEmpty(value) {
          if (!value) {
            throw new Error("Password can't be empty")
          }
        }
      }
    }
  }, {
    hooks : {
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'Register',
  });
  return Register;
};
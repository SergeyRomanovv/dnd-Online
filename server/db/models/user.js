'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Token, GameBoard}) {
      this.hasMany(Token, {foreignKey: 'user_id'});
      this.hasMany(GameBoard, {foreignKey: 'user_id'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    isGameMaster: DataTypes.BOOLEAN,
    activationLink: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

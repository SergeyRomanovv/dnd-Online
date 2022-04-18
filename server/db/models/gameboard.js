'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameBoard extends Model {
    static associate({User}) {
      this.belongsTo(User, {foreignKey: 'user_id'});
    }
  }
  GameBoard.init({
    board: DataTypes.TEXT,
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameBoard',
  });
  return GameBoard;
};

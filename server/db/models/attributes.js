'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attributes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Attr_category}) {
      this.belongsTo(Attr_category, {
        foreignKey: 'attr_category_id',
     });
    }
  }
  Attributes.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    attr_category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attributes',
  });
  return Attributes;
};
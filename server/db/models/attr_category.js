'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attr_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Attributes}) {
      this.hasMany(Attributes, {
        foreignKey: 'attr_category_id',
     });
    }
  }
  Attr_category.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attr_category',
  });
  return Attr_category;
};
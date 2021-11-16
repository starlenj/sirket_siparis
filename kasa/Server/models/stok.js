'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stok.init({
    name: DataTypes.STRING,
    stokType: DataTypes.STRING,
    stokGroup: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stok',
  });
  return Stok;
};
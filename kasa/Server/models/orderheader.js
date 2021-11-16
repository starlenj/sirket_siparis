'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderHeader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orderHeader.init({
    sube_id: DataTypes.NUMBER,
    status: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'orderHeader',
  });
  return orderHeader;
};
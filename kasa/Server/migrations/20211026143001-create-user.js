'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yonetim_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sube_id: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      password: {
        allowNull : false,
        type: Sequelize.STRING
      },
      email: {
        allowNull : false,
        type: Sequelize.STRING,
        unique:true 
      },
      status: {
        default : true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true },
      name: {
        type: Sequelize.STRING,
        allowNull: false, },
      }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'categories',
      });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('categories');
  }
};

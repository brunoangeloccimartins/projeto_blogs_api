'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true },
      displayName: {
        type: Sequelize.STRING,
        field: 'display_name',
        allowNull: false, },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, },
      password: {
        type: Sequelize.STRING,
        allowNull: false, },
      image: {
         type: Sequelize.STRING },
      }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'users',
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

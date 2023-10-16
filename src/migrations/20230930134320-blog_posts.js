'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true },
      title: {
        type: Sequelize.STRING,
        allowNull: false, },
      content: {
        type: Sequelize.STRING,
        allowNull: false, },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }, },
      published: {
        type: Sequelize.DATE,
        allowNull: false, },
      updated: {
        type: Sequelize.DATE,
        allowNull: false, },
      image: {
        type: Sequelize.STRING },
      }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'blog_posts',
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};

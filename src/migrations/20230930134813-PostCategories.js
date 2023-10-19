'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id',
        }, },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        }, },
      }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'posts_categories',
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};

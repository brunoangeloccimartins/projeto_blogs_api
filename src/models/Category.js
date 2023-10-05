module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
      name: DataTypes.STRING,
    }
      , {
      timestamps: false,
      underscored: true,
      tableName: 'categories',
    });
    Category.associate = function(models) {
      Category.hasMany(models.BlogPost, {
        as: 'posts',
        foreignKey: 'categoryId',
      });
    };
  return Category;
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    allowNull: false},
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }
      , {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    });
    User.associate = function(models) {
      User.hasMany(models.BlogPost, {
        as: 'blogPosts',
        foreignKey: 'userId',
      });
    };
  return User;
};
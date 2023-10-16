module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
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
        as: 'posts',
        foreignKey: 'userId',
        allowNull: false,
      });
    };
  return User;
};
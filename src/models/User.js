'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true },
    displayName: {
      type: DataTypes.STRING,
      field: 'display_name',
      allowNull: false, },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, },
    password: {
      type: DataTypes.STRING,
      allowNull: false, },
    image: {
       type: DataTypes.STRING },
    }, {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      tableName: 'users',
    });
};
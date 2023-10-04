const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user.dataValues);
  return user.dataValues;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  createUser,
  getAllUsers,
};
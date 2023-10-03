const { User } = require('../models');

const getUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user || user.password !== password) {
    return null;
  }
  return user;
};

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user.dataValues);
  return user.dataValues;
};

module.exports = {
  getUser, createUser,
};
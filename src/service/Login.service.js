const { User } = require('../models');

const getUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user || user.password !== password) {
    return null;
  }
  return user;
};

module.exports = {
  getUser,
};
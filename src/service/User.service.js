const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user.dataValues);
  return user.dataValues;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  const usersWithoutPassword = users.map((user) => {
    const { password, ...userWithoutPassword } = user.dataValues;
    return userWithoutPassword;
  });
  return usersWithoutPassword;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  const noPassUser = {
    id: user.dataValues.id,
    displayName: user.dataValues.displayName,
    email: user.dataValues.email,
    image: user.dataValues.image,
  };
  return noPassUser;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
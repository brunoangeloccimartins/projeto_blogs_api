const { createUser, getAllUsers } = require('../service/User.service');
const { generateToken } = require('../utils/authToken');
const { getUser } = require('../service/Login.service');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await getUser(email, password);
  if (user) {
    return res.status(409)
      .json({ message: 'User already registered' });
  }
  const newUser = await createUser(displayName, email, password, image);
  const token = generateToken(newUser);
  res.status(201).json({ token });
};

const getAllUsersController = async (_req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
};

module.exports = {
  createUserController,
  getAllUsersController,
};
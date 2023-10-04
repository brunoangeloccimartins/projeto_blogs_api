const { createUser, getAllUsers, getUserById } = require('../service/User.service');
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

const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  res.status(200).json(user);
};

module.exports = {
  createUserController,
  getAllUsersController,
  getUserByIdController,
};

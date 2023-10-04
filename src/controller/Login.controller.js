const { getUser } = require('../service/Login.service');
const { generateToken } = require('../utils/authToken');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' }); 
  }
  const user = await getUser(email, password);
  console.log(user);
  if (!user) {
    return res.status(400)
      .json({ message: 'Invalid fields' });
  }
  const payload = { id: user.dataValues.id, email: user.dataValues.email };
  const token = generateToken(payload);
  res.status(200).json({ token });
};

module.exports = {
  loginController,
};
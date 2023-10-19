const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const splitToken = token.split(' ');
  if (!splitToken[1]) return res.status(401).json({ message: 'Expired or invalid token' });
  try {
    const decoded = verifyToken(splitToken[1]);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  generateToken,
  verifyToken,
  validateToken,
};

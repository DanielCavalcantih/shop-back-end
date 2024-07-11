const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = { generateToken };
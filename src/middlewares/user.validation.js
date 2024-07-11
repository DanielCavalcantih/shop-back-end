const { loginSchema, registerSchema } = require('./schemas');

const loginValidation = async (req, res, next) => {
  const validation = loginSchema.validate(req.body);
  if (validation.error) {
    return res.status(401).json({ message: 'Verifique os campos e tente novamente!' });
  }
  return next();
};

const registerValidation = async (req, res, next) => {
  const validation = registerSchema.validate(req.body);
  if (validation.error) {
    return res.status(404).json({ message: 'Verifique os campos e tente novamente!' });
  }
  return next();
};

module.exports = { loginValidation, registerValidation };
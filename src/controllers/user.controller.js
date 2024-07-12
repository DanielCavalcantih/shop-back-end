const userService = require('../services/user.service.js');

const login = async (req, res) => {
  const token = await userService.login(req.body);
  if (token) return res.status(200).json({ token });
  return res.status(401).json({ message: 'E-mail ou senha inválido!' })
};

const register = async (req, res) => {
  const response = await userService.register(req.body);
  if (response) return res.status(201).json({ message: response.message });
  return res.status(404).json({ message: 'Usuário já existe!' });
};

const getUser = async (req, res) => {
  const { id } = req.payload;
  const user = await userService.getUser(id);
  return res.status(200).json(user);
};

const getUsers = async (req, res) => {
  const user = await userService.getUsers();
  return res.status(200).json(user);
};

module.exports = { login, register, getUser, getUsers };
const { User } = require("../models");
const { generateToken } = require("../middlewares/generateToken");

const login = async (user) => {
  const { email, password } = user;
  const findUser = await User.findOne({
    where: { email, password },
  });
  if (findUser) {
    const token = generateToken(findUser.dataValues);
    return token;
  }
};

const register = async (newUser) => {
  const findUser = await User.findOne({
    where: { email: newUser.email },
  });
  if (!findUser) {
    const body = {
      ...newUser,
    };
    await User.create(body);
    return { message: "Registrado com sucesso!" };
  }
};

const getUser = async (id) => {
  const user = await User.findOne({
    where: { id },
  });
  return user;
};

const getUsers = async () => {
  const user = await User.findAll();
  return user;
};

module.exports = { login, register, getUser, getUsers };

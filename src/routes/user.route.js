const { Router } = require('express');
const userController = require('../controllers/user.controller.js');
const { loginValidation, registerValidation } = require('../middlewares/user.validation');
const { tokenValidation } = require('../middlewares/token.validation');

const userRouter = Router();

userRouter.post('/login', loginValidation, userController.login);
userRouter.post('/register', registerValidation, userController.register);
userRouter.get('/user', tokenValidation, userController.getUser);
userRouter.get('/users', tokenValidation, userController.getUsers);
// userRouter.put('/change-mode', tokenValidation, userController.changeMode);

module.exports = { userRouter };
const express = require('express');
const { userRouter } = require('./routes/user.route');
const { productRouter } = require('./routes/product.route');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(userRouter);
app.use(productRouter);

module.exports = app;

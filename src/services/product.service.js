const { where } = require("sequelize");
const { Product } = require("../models");

const getMyProducts = async (id) => {
  const products = await Product.findAll({ where: { user_id: id } });
  return products;
};

const getProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const insertProduct = async (product, id) => {
  const newProduct = {
    user_id: id,
    ...product,
  };
  const createdProduct = await Product.create(newProduct);
  return createdProduct;
};

const updateProduct = async (product, id) => {
  const updatedProduct = await Product.update(product, {
    where: { id },
  });
  return updatedProduct;
};

const deleteProduct = async (id) => {
  await Product.destroy({
    where: { id },
  });
};

module.exports = {
  getMyProducts,
  getProducts,
  insertProduct,
  deleteProduct,
  updateProduct,
};

const { Product } = require("../models");

const getProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const insertProduct = async (product, id) => {
  const newProduct = {
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
  getProducts,
  insertProduct,
  deleteProduct,
  updateProduct,
};

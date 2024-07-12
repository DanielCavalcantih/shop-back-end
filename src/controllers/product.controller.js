const productService = require("../services/product.service");

const getMyProducts = async (req, res) => {
  const { id } = req.payload;
  const products = await productService.getMyProducts(id);
  return res.status(200).json(products);
};

const getProducts = async (req, res) => {
  const products = await productService.getProducts();
  return res.status(200).json(products);
};

const insertProduct = async (req, res) => {
  const { id } = req.payload;
  const newProduct = await productService.insertProduct(req.body, id);
  return res.status(201).json({ message: "Produto adicionado com sucesso!" });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await productService.updateProduct(req.body, id);
  return res.status(200).json({message: "Produto editado com sucesso!" });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  return res.status(204).json({ message: "Produto deletado com sucesso!" });
};

module.exports = {
  getMyProducts,
  getProducts,
  insertProduct,
  deleteProduct,
  updateProduct,
};

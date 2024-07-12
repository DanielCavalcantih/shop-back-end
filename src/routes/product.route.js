const { Router } = require("express");
const { tokenValidation } = require("../middlewares/token.validation");
const { productValidation } = require("../middlewares/product.validation");
const productController = require("../controllers/product.controller");

const productRouter = Router();

productRouter.get("/my-products", tokenValidation, productController.getMyProducts);
productRouter.get("/products", tokenValidation, productController.getProducts);
productRouter.post(
  "/products",
  tokenValidation,
  productValidation,
  productController.insertProduct
);
productRouter.put(
  "/products/:id",
  tokenValidation,
  productController.updateProduct
);
productRouter.delete(
  "/products/:id",
  tokenValidation,
  productController.deleteProduct
);

module.exports = { productRouter };

const { productSchema } = require("./schemas");

const productValidation = async (req, res, next) => {
  const validation = productSchema.validate(req.body);
  if (validation.error)
    return res.status(404).json({ message: "Verify the fields!" });
  return next();
};

module.exports = { productValidation };

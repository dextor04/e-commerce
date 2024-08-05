// exports.getProducts = (req, res, next) => {
//   req.json({
//     success: true,
//     message: "GET Products Working",
//   });
// };
// exports.getSingleProduct = (req, res, next) => {
//   res.json({
//     success: true,
//     message: "GET single Product Working",
//   });

const productModel = require("../models/productModel");

// };
exports.getProducts = async (req, res, next) => {
  const products = await productModel.find({});
  res.json({
    success: true,
    products,
  });
};

exports.getSingleProduct = async (req, res, next) => {
  console.log(req.params.id, "ID");
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

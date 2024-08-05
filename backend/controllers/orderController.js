const orderModel = require("../models/orderModel");

exports.createOrder = (req, res, next) => {
  console.log(req.body, "data");
  // orderModel.create();
  const cartItems = req.body;
  // if we want to have the one data from the array , we will use the reduce method
  const amount = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );
  console.log("amount", amount);
  res.json({
    success: true,
    message: "order created successfully",
  });
};

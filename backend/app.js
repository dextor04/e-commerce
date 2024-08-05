const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./config/connectDatabase");
dotenv.config({ path: "../backend/config/config.env" });

const products = require("./routes/product");
const orders = require("./routes/order");
connectDatabase();
// the below was used to get the request data and send that into the body as params
app.use(express.json());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);
app.listen(process.env.PORT, () => {
  console.log(
    `server listening on ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

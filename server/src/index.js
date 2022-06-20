const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { authRoute } = require("./routes");
const route = require("./routes");
const Product = require("./models/Product");


dotenv.config();

app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("SOMETHING HAPPENDED" + err);
  });

route(app);

// Product.findOne({ title: "Cantilever Chair" })
//   .populate("seller")
//   .exec(function (err, seller) {
//     if (err) return handleError(err);
//     console.log(seller);
//   });

app.listen(process.env.PORT, () => {
  console.log("Hello world");
});

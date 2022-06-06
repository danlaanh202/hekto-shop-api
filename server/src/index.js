const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { authRoute } = require("./routes");
const route = require("./routes");

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

app.listen(process.env.PORT, () => {
  console.log("Hello world");
});

const authRouter = require("./auth");
const productRouter = require("./product");
const uploadRouter = require("./uploadCloudinary");
const searchRouter = require("./search");
function route(app) {
  app.use("/search", searchRouter);
  app.use("/upload", uploadRouter);
  app.use("/auth", authRouter);
  app.use("/product", productRouter);
}
module.exports = route;

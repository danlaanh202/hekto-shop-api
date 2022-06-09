const authRouter = require("./auth");
const productRouter = require("./product");
const uploadRouter = require("./uploadCloudinary");
function route(app) {
  app.use("/upload", uploadRouter);
  app.use("/auth", authRouter);
  app.use("/product", productRouter);
}
module.exports = route;

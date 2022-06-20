const authRouter = require("./auth");
const productRouter = require("./product");
const uploadRouter = require("./uploadCloudinary");
const searchRouter = require("./search");
const categoryRouter = require("./category");
function route(app) {
  app.use("/category", categoryRouter)
  app.use("/search", searchRouter);
  app.use("/upload", uploadRouter);
  app.use("/auth", authRouter);
  app.use("/product", productRouter);
}
module.exports = route;

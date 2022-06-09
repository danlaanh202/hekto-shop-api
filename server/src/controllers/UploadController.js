const { cloudinary } = require("../utils/cloudinary");

class UploadController {
  async upload(req, res, next) {
    try {
      const fileStr = req.body.file64;
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "product",
      });
      return res.status(200).json({ url: uploadedResponse.url }); //return url of image
    } catch (err) {
      return res.status(500).json({ err: "Something went wrong!" });
    }
  }
}
module.exports = new UploadController();

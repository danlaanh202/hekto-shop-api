const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
class AuthController {
  async register(req, res, next) {
    const newUser = new User({
      username: req.body.username.trim().toLowerCase(),
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
    try {
      const savedUser = await newUser.save();
      // console.log(savedUser)
      return res.status(201).json(savedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async login(req, res, next) {
    try {
      console.log("asdasdsad");
      const user = await User.findOne({ username: req.body.username });
      if (!user) return res.status(404).json("No user Found");

      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      if (OriginalPassword !== req.body.password)
        return res.status(401).json("Wrong password");

      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC
      );

      const { password, ...others } = user._doc;

      return res.status(200).json({ ...others, accessToken });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}

module.exports = new AuthController();

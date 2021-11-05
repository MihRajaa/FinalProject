const User = require("../models/User");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });
const secret = process.env.secret;

exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existentUser = await User.findOne({ email });
    if (existentUser)
      return res.status(400).json({ msg: "user already exists" });

    const newUser = new User({
      fullName,
      email,
      password,
    });
    var salt = await bc.genSalt(10);
    var hash = await bc.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, secret);
    res.status(200).send({
      token,
      id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
    });
  } catch (error) {
    res.status("500").json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) res.status(404).json({ msg: "Email or password is not valid" });
    const isMatch = await bc.compare(password, user.password);
    if (!isMatch)
      res.status(401).json({ msg: "Email or password is not valid" });

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, secret);
    res.send({
      token,
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getUser = (req, res) => {
  res.send(req.user);
};

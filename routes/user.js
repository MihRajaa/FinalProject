const express = require("express");
const { register, login, getUser } = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const {
  registerRules,
  UserValidator,
} = require("../middlewares/UserValidator");
const Router = express.Router();

Router.post("/register", registerRules(), UserValidator, register);
Router.post("/login", login);
Router.get("/getUser", auth, getUser);

module.exports = Router;

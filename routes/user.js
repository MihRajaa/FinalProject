const express = require("express");
const { register, login, getUser } = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const {
  registerRules,
  UserValidator,
} = require("../middlewares/UserValidator");
const router = express.Router();

router.post("/register", registerRules(), UserValidator, register);
router.post("/login", login);
router.get("/getUser", auth, getUser);

module.exports = router;

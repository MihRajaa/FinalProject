const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("fullName", "this field is required").notEmpty(),
  check("email", "this field is required").notEmpty(),
  check("email", "this field should be a valid email").isEmail(),
  check("password", "this field should be at least 6 characteres").isLength({
    min: 6,
  }),
];

exports.UserValidator = (req, res, next) => {
  const errors = validationResult(req);
  return errors.isEmpty()
    ? next()
    : res.status(400).json({ errors: errors.array() });
};

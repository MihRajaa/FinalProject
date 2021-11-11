const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  todo: [
    {
      type: Schema.Types.ObjectId,
      ref: "Todos",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);

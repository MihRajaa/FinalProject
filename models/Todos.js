const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todosSchema = new Schema({
  todo: String,
  validation: Boolean,
  personne: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Todos", todosSchema);

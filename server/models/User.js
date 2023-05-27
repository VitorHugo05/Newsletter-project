const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  token: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  number: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("Usuario", usuarioSchema);

module.exports = User;

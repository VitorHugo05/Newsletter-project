const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
});


const User = mongoose.model('Usuario', usuarioSchema)


module.exports = User
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  usuario: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  data_de_nascimento: { type: Date, required: true },
}, {
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema, 'Usuarios');

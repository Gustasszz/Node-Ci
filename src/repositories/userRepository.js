const User = require('../models/user');

const create = async (data) => await User.create(data);
const findById = async (id) => await User.findById(id);
const findAll = async () => await User.find();
const findByUsername = async (username) => await User.findOne({ usuario: username });
const findByEmail = async (email) => await User.findOne({ email: email });
const findByField = async (filtro) => {
  return await User.findOne(filtro);
};
const remove = async (id) => await User.findByIdAndDelete(id);

module.exports = {
  create,
  findById,
  findAll,
  findByUsername,
  findByEmail,
  findByField,
  remove,
};

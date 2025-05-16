const bcrypt = require('bcrypt');
const repo = require('../repositories/userRepository');

async function createUser(data) {
  const senhaHash = await bcrypt.hash(data.senha, 10);
  data.senha = senhaHash;
  return await repo.create(data);
}

async function getUserById(id) {
  return await repo.findById(id);
}

async function getAllUsers() {
  return await repo.findAll();
}

async function getUserByUsername(username) {
  return await repo.findByUsername(username);
}

async function getUserByEmail(email) {
  return await repo.findByEmail(email);
}


async function deleteUser(id) {
  return await repo.remove(id);
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  getUserByUsername,
  getUserByEmail,
  deleteUser,
};

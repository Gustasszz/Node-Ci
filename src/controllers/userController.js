const service = require('../services/userService');

const create = async (req, res) => {
  const user = await service.createUser(req.body);
  res.status(201).json(user);
};

const getById = async (req, res) => {
  const user = await service.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
};

const getAll = async (req, res) => {
  const users = await service.getAllUsers();
  res.json(users);
};

const getByUsername = async (req, res) => {
  const user = await service.getUserByUsername(req.params.username);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
};

const getByEmail = async (req, res) => {
  const user = await service.getUserByEmail(req.params.email);
  if (!user) return res.status(404).json({ message: 'Email não encontrado' });
  res.json(user);
};


const remove = async (req, res) => {
  await service.deleteUser(req.params.id);
  res.status(204).send();
};

module.exports = {
  create,
  getById,
  getAll,
  getByUsername,
  getByEmail,
  remove,
};

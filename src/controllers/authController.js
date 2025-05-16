const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { login, senha } = req.body;

  const user = await authService.validarCredenciais(login, senha);
  if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });

  const token = jwt.sign(
    { id: user._id, usuario: user.usuario },
    process.env.JWT_SECRET,
    { expiresIn: '3h' }
  );

  res.json({ token, usuario: user.usuario });
};

module.exports = { login };

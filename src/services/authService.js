const repo = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

async function validarCredenciais(login, senha) {
  const filtro = login.includes('@')
    ? { email: login }
    : { usuario: login };

  const user = await repo.findByField(filtro); 

  if (!user) return null;

  const senhaCorreta = await bcrypt.compare(senha, user.senha);
  if (!senhaCorreta) return null;

  return user;
}

module.exports = { validarCredenciais };

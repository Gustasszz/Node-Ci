const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET; 

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // Agora o controller pode usar req.user.id, por exemplo
    next(); // Libera pra próxima etapa (controller)
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido ou expirado' });
  }
}

module.exports = authMiddleware;

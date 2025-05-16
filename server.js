require('dotenv').config(); // Lê variáveis do .env
const http = require('http');
const app = require('./src/app'); // Express configurado
const connectDB = require('./src/config/database');
const setupSocket = require('./src/config/socket');

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDB(); // Conecta ao MongoDB

  const server = http.createServer(app);
  setupSocket(server); // Inicia o Socket.IO

  server.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

startServer();

const { Server } = require('socket.io');

function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`🟡 Socket conectado: ${socket.id}`);

    socket.on('move_token', (data) => {
      socket.broadcast.emit('update_token', data);
    });

    socket.on('disconnect', () => {
      console.log(`🔌 Socket desconectado: ${socket.id}`);
    });
  });

  return io;
}

module.exports = setupSocket;

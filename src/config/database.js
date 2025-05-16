const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🟢 MongoDB conectado');
  } catch (error) {
    console.error('🔴 Erro ao conectar no MongoDB:', error);
    process.exit(1);
  }
}

module.exports = connectDB;

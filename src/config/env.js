function checkEnv() {
    const required = ['PORT', 'MONGO_URI', 'CLIENT_URL'];
    required.forEach((key) => {
      if (!process.env[key]) {
        throw new Error(`Variável de ambiente faltando: ${key}`);
      }
    });
  }
  
  module.exports = checkEnv;
  
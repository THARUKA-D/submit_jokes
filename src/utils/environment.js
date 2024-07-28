require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  db: {
    connectionURI: process.env.MONGO_CONNECTION_URI,
  },
};

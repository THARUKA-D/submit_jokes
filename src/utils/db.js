const { MongoClient } = require('mongodb');
const { db } = require('./environment');

const uri = db.connectionURI;
const client = new MongoClient(uri);

const getMongoClient = async () => {
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = { getMongoClient };

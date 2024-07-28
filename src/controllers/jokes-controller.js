const { getMongoClient } = require("../utils/db");
const { ObjectId } = require('mongodb');

const fetchJoke = async (_, res) => {
  const client = await getMongoClient();
  try {
    const database = client.db('unmoderated-jokes');
    const unmoderatedJokes = database.collection('unmoderated-jokes-collection');
    const data = await unmoderatedJokes.aggregate([{ $sample: { size: 1 } }]).toArray();

    res.status(200).send({
      success: true,
      data,
    });
  }
  catch (e) {
    res.status(500).send({
      success: false,
    });
  }
  finally {
    await client.close();
  }
}

const addJoke = async (req, res) => {
  const client = await getMongoClient();
  try {
    const database = client.db('unmoderated-jokes');
    const unmoderatedJokes = database.collection('unmoderated-jokes-collection');
    const document = req.body

    await unmoderatedJokes.insertOne(document);
    res.status(200).send({
      success: true,
    });

  }
  catch {
    res.status(500).send({
      success: false,
    });
  }

  finally {
    await client.close();
  }
}

const deleteJoke = async (req, res) => {
  const client = await getMongoClient();
  try {
    const database = client.db('unmoderated-jokes');
    const unmoderatedJokes = database.collection('unmoderated-jokes-collection');
    const { id } = req.body
    await unmoderatedJokes.deleteOne({ _id: ObjectId.createFromHexString(id) });

    res.status(200).send({
      success: true,
    });

  }
  catch {
    res.status(500).send({
      success: false,
    });
  }

  finally {
    await client.close();
  }
}
module.exports = {
  fetchJoke,
  addJoke,
  deleteJoke,
}
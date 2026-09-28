require('dns').setServers(['8.8.8.8', '1.1.1.1']);
require('dotenv').config({ path: '../../.env' });
const { MongoClient } = require('mongodb');
const fs = require('fs');

const url = process.env.MONGO_URL;
const dbName = 'giftdb';
const collectionName = 'gifts';
const data = JSON.parse(fs.readFileSync('gifts.json', 'utf8'));

async function loadGifts() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const collection = client.db(dbName).collection(collectionName);
    const count = await collection.countDocuments();
    if (count === 0) {
      const result = await collection.insertMany(data);
      console.log('Inserted documents into the collection', result.insertedCount);
    } else {
      console.log('Gifts already exist in DB');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
loadGifts();


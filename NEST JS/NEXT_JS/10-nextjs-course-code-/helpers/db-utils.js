import { MongoClient } from "mongodb";

export async function connectDB(DB_NAME) {
  const client = await MongoClient.connect(
    `mongodb+srv://alex:alex@cluster0.qunp1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  );
  return client;
}

export async function insertDocument(client, document, collection) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

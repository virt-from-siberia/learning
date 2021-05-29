import { MongoClient } from "mongodb";

const DB_NAME = "events";
const DB_COLLECTION = "comments";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    `mongodb+srv://alex:alex@cluster0.qunp1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  );

  //POST
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection(DB_COLLECTION).insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;
    res.status(201).json({ message: "Added comment", comment: newComment });
  }
  //GET
  if (req.method === "GET") {
    const db = client.db();

    const documents = await db
      .collection(DB_COLLECTION)
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comment: documents });
  }

  client.close();
}

export default handler;

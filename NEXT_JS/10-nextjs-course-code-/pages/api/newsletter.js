import { MongoClient } from "mongodb";

const DB_NAME = "events";
const DB_COLLECTION = "newsletter";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid  email address" });
      return;
    }
    const client = await MongoClient.connect(
      `mongodb+srv://alex:alex@cluster0.qunp1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      { useUnifiedTopology: true }
    );
    const db = client.db();

    await db.collection(DB_COLLECTION).insertOne({
      email: userEmail,
    });
    client.close();

    console.log(userEmail);
    res.status(200).json({ message: "Signed up!" });
  }
}

export default handler;

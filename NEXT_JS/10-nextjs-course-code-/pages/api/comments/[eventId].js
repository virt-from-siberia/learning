
import {
  connectDB,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-utils";

const DB_NAME = "events";
const DB_COLLECTION = "comments";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDB(DB_NAME);
  } catch (error) {
    res.status(500).json({ message: "Could not connect to DB filed" });
    return;
  }

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

    const result = await insertDocument(client, newComment, DB_COLLECTION);

    newComment.id = result.insertedId;
    res.status(201).json({ message: "Added comment", comment: newComment });
  }
  //GET
  if (req.method === "GET") {
    try {
      const sortBy = { _id: -1 };
      const documents = await getAllDocuments(client, DB_COLLECTION, sortBy);

      res.status(200).json({ comment: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments fail" });
    }
  }

  client.close();
}

export default handler;

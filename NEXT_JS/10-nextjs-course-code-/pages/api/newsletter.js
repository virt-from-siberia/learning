import { connectDB, insertDocument } from "../../helpers/db-utils";

const DB_NAME = "events";
const DB_COLLECTION = "newsletter";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid  email address" });
      return;
    }

    let client;

    try {
      client = await connectDB(DB_NAME);
    } catch (error) {
      res.status(500).json({ message: "Connecting to DB fail" });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail }, DB_COLLECTION);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data to DB fail" });
      return;
    }

    res.status(200).json({ message: "Signed up!" });
  }
}

export default handler;

import fs from "fs";
import path from "path";

const DATA_FILE = "feedback.json";
const DIR_FOLDER = "data";

function handler(req, res) {
  if (req.method === "POST") {
    const newFeedback = {
      id: new Date().toISOString(),
      email: req.body.email,
      text: req.body.text,
    };

    const FILE_PATH = path.join(process.cwd(), DIR_FOLDER, DATA_FILE);
    const FILE_DATA = fs.readFileSync(FILE_PATH);
    const data = JSON.parse(FILE_DATA);

    data.push(newFeedback);
    fs.writeFileSync(FILE_PATH, JSON.stringify(data));
  }

  res.status(200).json({
    message: "This works",
  });
}

export default handler;

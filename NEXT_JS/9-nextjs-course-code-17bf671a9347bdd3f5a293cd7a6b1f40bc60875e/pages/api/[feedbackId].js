import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  if (req.method === "DELETE") {
  }
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedBackData = extractFeedback(filePath);

  const selectedFeedback = feedBackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;

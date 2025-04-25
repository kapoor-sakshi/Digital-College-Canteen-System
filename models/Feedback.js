const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  batch: { type: String, required: true },
  rating: { type: Number, required: true },
  bestItem: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

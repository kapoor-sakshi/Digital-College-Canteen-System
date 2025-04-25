// pages/api/feedback/index.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  let client;

  try {
    client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const feedbackCollection = db.collection('feedbacks');

    if (req.method === 'POST') {
      const { name, batch, rating, bestItem, message } = req.body;

      // Basic validation
      if (!name || !batch || !rating || !bestItem || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      // Insert
      const result = await feedbackCollection.insertOne({
        name,
        batch,
        rating,
        bestItem,
        feedback: message,
        createdAt: new Date(),
      });

      return res.status(201).json({ message: 'Feedback submitted successfully', result });
    }

    if (req.method === 'GET') {
      const feedbacks = await feedbackCollection.find().sort({ createdAt: -1 }).toArray();
      return res.status(200).json({ feedbacks });
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (client) client.close();
  }
}

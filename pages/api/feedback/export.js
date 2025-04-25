import dbConnect from '../../../util/dbConnect';
import Feedback from '../../../models/Feedback';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const feedbacks = await Feedback.find().lean();

    const csvHeaders = ['Name', 'Batch', 'Rating', 'Best Item', 'Message', 'Created At'];
    const csvRows = feedbacks.map(f => [
      `"${f.name}"`,
      `"${f.batch}"`,
      f.rating,
      `"${f.bestItem}"`,
      `"${f.message}"`,
      `"${new Date(f.createdAt).toLocaleString()}"`
    ]);

    const csvContent = [csvHeaders.join(','), ...csvRows.map(row => row.join(','))].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="feedbacks.csv"');
    res.status(200).send(csvContent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

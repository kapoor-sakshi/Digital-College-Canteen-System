import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get('/api/feedback');
        setFeedbacks(res.data.feedbacks ?? res.data);
      } catch (err) {
        console.error('Error loading feedbacks:', err);
      }
    };
    fetchFeedbacks();
  }, []);

  const downloadCSV = async () => {
    try {
      const response = await fetch('/api/feedback/export');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'feedbacks.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Error downloading CSV:', err);
      alert('Failed to download CSV');
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Feedbacks</h2>
        <button
          onClick={downloadCSV}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Export Feedback CSV
        </button>
      </div>

      {feedbacks.length === 0 && <p>No feedback yet.</p>}

      {feedbacks.map((item, idx) => (
        <div
          key={idx}
          className="border p-4 rounded-lg mb-4 bg-white text-black"
        >
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Batch:</strong> {item.batch}</p>
          <p><strong>Rating:</strong> {item.rating} ⭐</p>
          <p><strong>Best Item:</strong> {item.bestItem}</p>
          <p><strong>Feedback:</strong> {item.message}</p>
          <p className="text-sm text-gray-500">
            {new Date(item.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdminFeedback;

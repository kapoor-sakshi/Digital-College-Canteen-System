// components/ui/Feedback.jsx
import { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [rating, setRating] = useState(1);
  const [bestItem, setBestItem] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/feedback', { name, batch, rating, bestItem, message: feedback });
      alert('Feedback submitted successfully');

      // Clear the form
      setName('');
      setBatch('');
      setRating(1);
      setBestItem('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback');
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/pizza-bg.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="feedback-form p-6 max-w-md w-full bg-white bg-opacity-90 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Provide Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-black">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-black">Batch:</label>
            <input
              type="text"
              placeholder="e.g. CSE 3rd Year"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-black">Rating (1-5):</label>
            <input
              type="number"
              value={rating}
              min="1"
              max="5"
              onChange={(e) => setRating(Number(e.target.value))}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-black">Best Item:</label>
            <input
              type="text"
              value={bestItem}
              onChange={(e) => setBestItem(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium text-black">Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

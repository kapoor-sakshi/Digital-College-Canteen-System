import { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    customer: "",
    rating: "",
    bestItem: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Feedback submitted successfully!");
        setFormData({ customer: "", rating: "", bestItem: "", feedback: "" });
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Give Feedback</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          name="customer"
          value={formData.customer}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating (1-5)"
          className="p-2 border rounded"
          min={1}
          max={5}
          required
        />
        <input
          type="text"
          name="bestItem"
          value={formData.bestItem}
          onChange={handleChange}
          placeholder="Best Item You Had"
          className="p-2 border rounded"
        />
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Your Feedback"
          className="p-2 border rounded"
          rows={4}
        ></textarea>
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;

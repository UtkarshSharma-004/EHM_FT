import React, { useState } from "react";
import axios from "axios";

const AdminArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("photo", image);

    try {
      await axios.post("http://localhost:5000/api/articles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Article added successfully!");
      setTitle("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Error adding article");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto pt-40 bg-white shadow rounded ">
      <h2 className="text-2xl font-bold mb-4">Add New Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
          rows="5"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Article
        </button>
      </form>
    </div>
  );
};

export default AdminArticleForm;

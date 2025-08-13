import React, { useEffect, useState } from "react";
import axios from "axios";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto pt-20">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      {articles.map((article) => (
        <div
          key={article._id}
          className="bg-white shadow p-4 rounded mb-6"
        >
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p className="mt-2">{article.content}</p>
          {article.photo && (
            <img
              src={`http://localhost:5000/${article.photo}`}
              alt={article.title}
              className="mt-4 max-h-60 object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;

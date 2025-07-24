import React, { useEffect, useState } from "react";
import fallbackImg from "@/assets/react.svg";

const NEWS_API_URL = "https://newsapi.org/v2/everything?q=crypto%20OR%20stocks&from=2025-06-24&sortBy=publishedAt&apiKey=27b33ab23ee24664bc1c0657f59c6b20";
const FALLBACK_IMAGE = fallbackImg;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [hiddenIndexes, setHiddenIndexes] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div className="news-section">Loading news...</div>;
  if (error) return <div className="news-section">Error: {error}</div>;

  // Only include articles with a valid, non-placeholder image
  const PLACEHOLDER_IMAGES = [
    "https://static.biztoc.com/static/img/logo.png", // Biztoc default
    // Add more known placeholder URLs here if needed
  ];
  const articlesWithImage = articles.filter(
    (article) =>
      article.urlToImage &&
      article.urlToImage.trim() !== "" &&
      !PLACEHOLDER_IMAGES.includes(article.urlToImage)
  );
  const displayedArticles = showAll ? articlesWithImage : articlesWithImage.slice(0, 15);

  const handleImgError = (e, idx) => {
    e.target.onerror = null;
    setHiddenIndexes((prev) => [...prev, idx]);
  };

  return (
    <div className="news-section">
      <h2>Crypto & Stock Market News</h2>
      <div className="news-list">
        {displayedArticles.length === 0 && <p>No news articles found.</p>}
        {displayedArticles.map((article, idx) => (
          hiddenIndexes.includes(idx) ? null : (
            <div className="news-card" key={idx}>
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
                onError={(e) => handleImgError(e, idx)}
              />
              <div className="news-content">
                <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
                <p>{article.description}</p>
                <span className="news-date">{new Date(article.publishedAt).toLocaleString()}</span>
              </div>
            </div>
          )
        ))}
      </div>
      {articlesWithImage.length > 15 && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className="news-view-more" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsSection; 
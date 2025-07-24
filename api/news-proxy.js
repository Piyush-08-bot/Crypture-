const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 5001; // or any free port

app.get('/api/news', async (req, res) => {
    try {
        // Use the provided NewsAPI endpoint and key
        const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-06-24&sortBy=publishedAt&apiKey=27b33ab23ee24664bc1c0657f59c6b20');
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => {
    console.log(`News proxy server running on http://localhost:${PORT}`);
}); 
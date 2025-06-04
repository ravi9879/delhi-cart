// Smart E-Commerce Search Engine using MERN + ML (basic version)

// === 1. React Frontend (Search UI) ===
// File: client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.post('http://localhost:800/search', { query });
      setResults(res.data.results);  
    } catch (error) {
      console.log(error) ;
    }
    
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Smart Product Search</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
      <ul className="mt-4">
        {results.map((item, i) => (
          <li key={i} className="p-2 border-b">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

// === 2. Express Backend (Search API) ===
// File: server/index.js
// const express = require('express');
// const cors = require('cors');
// const { getSimilarProducts } = require('./ml');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const sampleProducts = [
//   { id: 1, name: 'Red Nike Running Shoes' },
//   { id: 2, name: 'Adidas Gym Shorts' },
//   { id: 3, name: 'Apple iPhone 13 Pro' },
//   { id: 4, name: 'Wireless Bluetooth Headphones' },
// ];

// app.post('/search', async (req, res) => {
//   const { query } = req.body;
//   const results = await getSimilarProducts(query, sampleProducts);
//   res.json({ results });
// });

// app.listen(5000, () => console.log('Server running on http://localhost:5000'));

// // === 3. ML Logic (Simple Embedding Matching) ===
// // File: server/ml.js
// const use = require('@tensorflow-models/universal-sentence-encoder');
// const tf = require('@tensorflow/tfjs-node');

// let model;

// async function loadModel() {
//   if (!model) {
//     model = await use.load();
//   }
//   return model;
// }

// async function getSimilarProducts(query, products) {
//   const model = await loadModel();
//   const productNames = products.map(p => p.name);
//   const embeddings = await model.embed([query, ...productNames]);

//   const queryEmbedding = embeddings.slice([0, 0], [1]);
//   const productEmbeddings = embeddings.slice([1, 0]);
//   const scores = await tf.matMul(queryEmbedding, productEmbeddings, false, true).array();

//   const ranked = products
//     .map((p, i) => ({ ...p, score: scores[0][i] }))
//     .sort((a, b) => b.score - a.score);

//   return ranked.slice(0, 5); // top 5 results
// }

// module.exports = { getSimilarProducts };

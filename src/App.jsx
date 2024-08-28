import { useState } from 'react'
import './App.css'

import React from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '5px', width: '100%' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Age:</label><br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ padding: '5px', width: '100%' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Favorite Color:</label><br />
          <input
            type="text"
            value={favoriteColor}
            onChange={(e) => setFavoriteColor(e.target.value)}
            style={{ padding: '5px', width: '100%' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>

      {submitted && (
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <h2>Submitted Information</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Favorite Color:</strong> {favoriteColor}</p>
        </div>
      )}
    </div>
  );
};

export default App;

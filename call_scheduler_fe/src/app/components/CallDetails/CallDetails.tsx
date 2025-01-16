'use client'

import React, { useState } from 'react';

const CallDetails = () => {
  const [rating, setRating] = useState(null);
  const [notes, setNotes] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleNotesChange = (event) => {
    if (event.target.value.length <= 500) {
      setNotes(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic here
    console.log('Rating:', rating);
    console.log('Notes:', notes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rating (1-5):</label>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value}>
              <input
                type="radio"
                value={value}
                checked={rating == value}
                onChange={handleRatingChange}
                required
              />
              {value}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label>Notes (Max 500 characters):</label>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          maxLength="500"
          rows="4"
          cols="50"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CallDetails;
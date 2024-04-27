import React from 'react';
import config from '../config';

function HomePage() {
  return (
    <div className="container">
      <h1>Student Homepage</h1>
      <div className="options">
        <div className="option" onClick={() => { /* View marks */ }}>
          View Marks
        </div>
      </div>
    </div>
  );
}

export default HomePage;
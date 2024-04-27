import React from 'react';
import './HomePage.css';
import config from '../config';
function HomePage() {
  return (
    <div className="container">
      <h1>Faculty Homepage</h1>
      <div className="options">
        <div className="option" onClick={() => { /* Handle upload marks */ }}>
          Upload Marks
        </div>
        <div className="option" onClick={() => { /* Handle view students */ }}>
          View Students
        </div>
        <div className="option" onClick={() => { /* Handle check backlogs */ }}>
          Check Backlogs
        </div>
      </div>
    </div>
  );
}

export default HomePage;
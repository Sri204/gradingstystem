import React from 'react';
import config from '../config';

function HomePage() {
  return (
    <div className="container">
      <h1>Admin Homepage</h1>
      <div className="options">
        <div className="option" onClick={() => { /* Handle Grades */ }}>
          Upload CGPA
        </div>
        <div className="option" onClick={() => { /* Handle Courses */ }}>
          handle Courses
        </div>
        <div className="option" onClick={() => { /* Handle Faculty */ }}>
          handle Faculty
        </div>

      </div>
    </div>
  );
}

export default HomePage;
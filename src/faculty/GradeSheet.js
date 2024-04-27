import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import config from '../config';

function GradeSheet({ students, onSaveGrade }) {
  const [grades, setGrades] = useState(students.map((student) => ({ id: student.id, grade: '' })));

  const handleGradeChange = (id, newGrade) => {
    const updatedGrades = grades.map((grade) =>
      grade.id === id ? { ...grade, grade: newGrade } : grade
    );
    setGrades(updatedGrades);
  };

  const handleSaveGrades = () => {
    onSaveGrade(grades);
    axios.post('http://localhost:3000/api/grades', { grades }) // Send grades to backend
      .then((response) => console.log(response.data))
      .catch((error) => console.error('Error saving grades:', error));
  };

  return (
    <div className="grade-sheet">
      <h1>Grade Sheet</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="text"
                  value={grades[index].grade}
                  onChange={(e) => handleGradeChange(student.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSaveGrades}>Save Grades</button>
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  const saveGrades = (grades) => {
    // No need to implement saving on frontend, as backend will handle it
  };

  return (
    <div className="App">
      <GradeSheet students={students} onSaveGrade={saveGrades} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
function App() {
  const [courses, setCourses] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedCourse,setSelectedCourse]=useState('');

  useEffect(() => {
    axios.get(`${config.url}/viewcourses`)
      .then(res => {
        setCourses(res.data);
      });

    axios.get(`${config.url}/viewfaculties`)
      .then(res => {
        setFaculty(res.data);
      });
  }, []);

  const handleAddCourse = () => {
    axios.post(`${config.url}/addcourses`, { name: selectedCourse, faculty: selectedFaculty })
      .then(res => {
        setCourses([...courses, res.data]);
        setCourseName('');
        setSelectedFaculty('');
      });
  };

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>{course.name} - {course.faculty}</li>
        ))}
      </ul>
      <h2>Add Course</h2>
      <select value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map(course => (
          <option key={course.coursecode} value={course._id}>{course.name}</option>
        ))}
      </select>
      <select value={selectedFaculty} onChange={e => setSelectedFaculty(e.target.value)}>
        <option value="">Select Faculty</option>
        {faculty.map(faculty => (
          <option key={faculty._id} value={faculty.name}>{faculty.name}</option>
        ))}
      </select>
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
}

export default App;

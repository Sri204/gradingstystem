import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
export default function ViewCourses() {
  const [courses, setFaculties] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setFaculties(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourse = async (coursecode) => {
    try {
      await axios.delete(`${config.url}/deletecourse/${coursecode}`);
      fetchCourses(); // to redirect to the same page
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Courses</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>coursecode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(courses) && courses.length > 0 ? (
    courses.map((course, index) => (
      <tr key={index}>
        <td>{course.coursecode}</td>
        <td>
          <button style={{backgroundColor:"orange"}} onClick={() => deleteCourse(course.coursecode)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="1">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudents`);
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (username) => {
    try {
      await axios.delete(`${config.url}/deletestudent/${username}`);
      fetchStudents(); // to redirect to the same page
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Students</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((student, index) => (
      <tr key={index}>
        <td>{student.username}</td>
        <td>
          <button style={{backgroundColor:"orange"}} onClick={() => deleteStudent(student.username)} className='button'>Delete</button>
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
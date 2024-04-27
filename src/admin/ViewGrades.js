import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
function ViewGrades() {
    const [grades, setGrades] = useState([]);
    const [studentId, setStudentId] = useState('');

    const fetchGrades = async () => {
        try {
            const response = await axios.get(`http://localhost:2024/grades/${studentId}`);
            setGrades(response.data);
        } catch (error) {
            console.error('Error fetching grades:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter Student ID"
            />
            <button onClick={fetchGrades}>Get Grades</button>
            <ul>
                {grades.map((grade) => (
                    <li key={grade.id}>{grade.course_name}: {grade.grade}</li>
                ))}
            </ul>
        </div>
    );
}

export default ViewGrades;

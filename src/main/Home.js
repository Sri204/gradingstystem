import React from 'react'

export default function Home() 
{
  return (
  
        <div className="container">
          <div className="box faculty">
            <h2>Faculty</h2>
            <button>Login</button>
            <button>View Students</button>
            <button>Upload Grades</button>
            <button>Backlogs</button>
          </div>
          <div className="box student">
            <h2>Student</h2>
            <button>Login</button>
            <button>View Grades</button>
            <button>Revaluation</button>
          </div>
          <div className="box admin">
            <h2>Admin</h2>
            <button>Login</button>
            <button>Add/Delete Students</button>
            <button>Add/Delete Faculty</button>
            <button>Add/Delete Courses</button>
            <button>Calculate CGPA</button>
            <button>View Students</button>
            <button>View Faculty</button>
            <button>View Courses</button>
          </div>
        </div>
      );
    }
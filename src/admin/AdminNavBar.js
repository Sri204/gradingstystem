import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import "./Admin.css"
import config from '../config';
 import AdminHome from './AdminHome';
import ViewStudents from './ViewStudents';
import ViewFaculties from './ViewFaculties';
import AddStudent from './AddStudent'
import AddFaculty from './AddFaculty'
import AddCourse from './AddCourse';
import ViewCourses from './ViewCourses';
import Client from './client'

import ViewGrades from './ViewGrades'

export default function AdminNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  return (
    <div>

     <nav>
       <ul>
          <li><Link to="/adminhome"><b>Home</b></Link></li>
          <li><Link to="/viewstudents"><b>View Students</b></Link></li>
          <li><Link to="/viewfaculties"><b>View Faculties</b></Link></li>
          <li><Link to="/addstudent"><b>Add Student</b></Link></li>
          <li><Link to="/addfaculty"><b>Add Faculty</b></Link></li>
          <li><Link to="/addcourse"><b>Add Course</b></Link></li>
          <li><Link to="/viewcourses"><b>View Courses</b></Link></li>
          <li><Link to="/client"><b>Mapping</b></Link></li>
          <li><Link to="/viewgrades"><b>View Grades</b></Link></li>
          <li><button className='logoutButton' onClick={handleLogout}>Logout</button></li>
        </ul>
     </nav>

         <Routes>
          <Route path='/adminhome' element={<AdminHome/>}/>
         <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/addfaculty' element={<AddFaculty />} />
        <Route path='/viewstudents' element={<ViewStudents />} />
        <Route path='/viewfaculties' element={<ViewFaculties />} />
        <Route path='/viewgrades' element={<ViewGrades/>}/>
        <Route path='/addcourse' element={<AddCourse />} />
        <Route path='/viewcourses' element={<ViewCourses/>}/>
        <Route path='/client' element={<Client/>}/>

      </Routes>
    </div>

   
  )
}
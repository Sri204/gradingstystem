import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import "./style.css"
import StudentLogin from '../student/StudentLogin'
import FacultyLogin from '../faculty/FacultyLogin'
import AdminLogin from '../admin/AdminLogin'


export default function MainNavBar({onAdminLogin, onStudentLogin, onFacultyLogin}) 
{
  return (
    <div>
        <nav style={{color:'white'}}>
          <ul style={{textEmphasisColor:'white'}}>
            <Link to = "/"><h3>Home</h3></Link>
            <Link to = "/about"><h3>About</h3></Link>
            <Link to ="/studentlogin"><h3>Student Login</h3></Link>
            <Link to ="/facultylogin"><h3>Faculty Login</h3></Link>
            <Link to ="/adminlogin"><h3>Admin Login</h3></Link>
            <Link to ="/contact"><h3>Contact</h3></Link>
          </ul>
            
        </nav>
        <Routes>
          <Route path = "/" element={<Home/>} exact/>
          <Route path = "/about" element = {<About/>} exact/>
          <Route path = "/contact" element = {<Contact/>} exact/>
          <Route path="/studentlogin" element={<StudentLogin onStudentLogin={onStudentLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/facultylogin" element={<FacultyLogin onFacultyLogin={onFacultyLogin}/>} exact />
        </Routes>

    </div>
  )
}

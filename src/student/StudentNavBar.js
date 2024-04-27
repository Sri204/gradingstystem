import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import StudentHome from './StudentHome'
import "./student.css"
import ChangeStudentPwd from './ChangeStudentPwd'
import ViewGrades from './ViewGrades'
import config from '../config'
export default function StudentNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');

    navigate('/studentlogin');
    window.location.reload()
  };
  return (
    <div>
        <nav>
            <ul>
                <li><Link to ="/studenthome"><b>Home</b></Link></li>
                <li><Link to ="/changestudentpwd"><b>Change Password</b></Link></li>
                <li><Link to="/viewgrades"><b>View Grades</b></Link></li>
                <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li> 
            </ul>
        </nav>
        <Routes>
            <Route path='/studenthome' element={<StudentHome/>}/>
            <Route path='/viewgrades' element={<ViewGrades/>}/>
            <Route path='/changestudentpwd' element={<ChangeStudentPwd/>}/>
        </Routes>
    </div>
  )
}

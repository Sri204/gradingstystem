import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './FacultyHome';
import ViewStudents from './ViewStudents'
import GradeSheet from './GradeSheet'
import ChangeFacultyPwd from './ChangeFacultyPwd';
import config from '../config';

export default function FacultyNavBar() 
{
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');

    navigate('/facultylogin');
    window.location.reload()
  };
  return (
    <div>
        <nav>
            <ul>
               <li> <Link to ="/facultyhome"><b>Home</b></Link></li>
                <li><Link to ="/viewstudents"><b>View Students</b></Link></li>
                <li><Link to="/gradesheet"><b>Grade Sheet</b></Link></li>
                <li><Link to="/changefacultypwd"><b>Change Password</b></Link></li>
                <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/facultyhome' element={<HomePage/>}/>
            <Route path="/viewstudents" element={<ViewStudents/>} />
            <Route path='/gradesheet' element={<GradeSheet/>}/> 
            <Route path='/changefacultypwd' element={<ChangeFacultyPwd/>}/>
         </Routes>
    </div>
  )
}

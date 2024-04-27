import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'

export default function AddCourse() 
{
  //formData state variable
  const [formData, setFormData] = useState({
    coursecode:'',
    coursename:''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = id === 'coursename' ? value.toUpperCase() : value;
    setFormData({ ...formData, [id]: newValue });
  };
  

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/addcourse`, formData);
      if (response.status === 200) 
      {
        setFormData({
        coursecode:'',
        coursename:''
          
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Add Course</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name</label>
          <input type="text" id="coursename" value={formData.coursename} onChange={handleChange} onKeyUp={handleChange} required />
        </div>
       
        <div>
          <label>CourseCode</label>
          <input type="text" id="coursecode" value={formData.coursecode} onChange={handleChange} required />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
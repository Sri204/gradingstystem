import React, { useState } from 'react';
import "./Faculty.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';

export default function FacultyLogin({onFacultyLogin}) 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkfacultylogin`, formData);
      if (response.data!=null) 
      {
        onFacultyLogin();

        localStorage.setItem('faculty', JSON.stringify(response.data));
        navigate("/FacultyHome")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div align="center">
      <h3 align="center"><u>Faculty Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
        <a href="/forgot-password" className="forgot-password">
        Forgot Password?
      </a>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate(); // ✅ correct hook for navigation in v6

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", { // Updated endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/"); // ✅ this replaces history.push in v6
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5 pt-5">
    <h2 className="text-center my-3">Sign up</h2>

      <form onSubmit={handleSubmit}>
        
      <div className="form-text mx-2">Please enter your full name.</div>
          <input type="text" className="form-control my-2" name="name" onChange={onChange} placeholder='Name' required />
              
          <div className="form-text mx-2">We'll never share your email with anyone else.</div>
          <input type="email" className="form-control my-2" name="email" onChange={onChange} placeholder='Email Address' required />
             
      
          <div className="form-text mx-2">Password must be at least 5 characters long.</div>
          <input type="password" className="form-control my-2" name="password" onChange={onChange} required minLength={5} placeholder='Password' />
           
          <div className="form-text mx-2">Please confirm your password.</div>
          <input type="password" className="form-control my-2" name="confirmPassword" onChange={onChange} required minLength={5} placeholder='Confirm Password' />
              
        <button type="submit" className="btn btn-primary my-2">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;

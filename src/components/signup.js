"use client"
import React, { useState } from 'react';
import axios from 'axios';
import './sign.css';
const Signup=(props) =>{
    const [fullName, setFullName] =useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] =useState('');
    const [error,setError] =useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      if (password !== rePassword) {
        setError('Passwords do not match');
        return;
    }

     
  
    return (
      <main className='web-container'>
        <div className="signup-container">
          <div className="signup-content">
            <div className='image-container'>
              <img src="https://i.pinimg.com/564x/39/69/01/396901b74b625c315de597b780438fbf.jpg" alt="Image" className="login-image" />
            </div>
            <div className="signup-form">
              <form onSubmit={handleLogin}>
                <h1>SIGN UP</h1>
                <label className='email-label'>Enter details to Sign-up:</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="re-password"
                  placeholder="Re-enter Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <button type="submit" className='continue'>SUBMIT</button>
              </form>
            </div>
          </div>
  
        </div>
      </main>
    );
}
}
export default Signup

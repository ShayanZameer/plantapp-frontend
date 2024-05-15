


import React, { useState } from 'react';
import './Login.scss';
import Home from '../components/Home/Home';
import { color } from 'chart.js/helpers';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if email and password match admin credentials
    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      // Display error message if credentials are incorrect
      setError('Invalid email or password. Please try again.');
    }
  };

  return (


    // <div  className="flex flex-col h-screen bg-[linear-gradient(170deg,#38B2AC,#2f3d40_50%,#FFFFFF_50%)]">
    <div className="login-container">
      {isLoggedIn ? (
        <Home />
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          {error && <div className="error-message">{error}</div>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
    // </div>
  );
};

export default Login;


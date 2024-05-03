import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLogin(e) {
    e.preventDefault();

    const credentials = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.status === 200) {
       const userData = await response.json();
        navigate(`/dashboard`, { state: { userData } });
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <div id="loginform">
      <h2 id="headerTitle">Login/SignUp</h2>
      <form onSubmit={handleLogin}>
        <div className="row">
          <label>Email</label>
          <input
            value={username}
            onChange={handleUsernameChange}
            type="text"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="row">
          <label>Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div id="button" className="row">
          <button onClick={handleLogin} type="submit" to="/notes">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

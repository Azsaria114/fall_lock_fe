import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import drillingFluidImg from '../assets/drilling-fluid.png';
import tamilnaduLogo from '../assets/tn_logo.png'; // Add this

import './styles/login.css'; // Import the updated CSS

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password, rememberMe });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-header">
          <img src={tamilnaduLogo} alt="TN Logo" className="tn-logo" />
          <div>
            <h3>Government of Tamilnadu</h3>
            <p>தமிழ்நாடு அரசு</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Login</h2>
          <p>Welcome back! Please enter your details.</p>

          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <Link to="/forgot-password" className="forgot-password">Forget Password</Link>
          </div>

          <button type="submit" className="primary-btn">Sign in</button>

          <div className="google-login">
            <button type="button" className="google-btn">
              <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" />
              Sign in with Google
            </button>
          </div>

          <p className="footer-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>

      <div className="auth-right">
        <img src={drillingFluidImg} alt="Drilling fluid" />
      </div>
    </div>
  );
}

export default LoginPage;

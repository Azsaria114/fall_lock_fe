import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import drillingFluidImg from '../assets/drilling-fluid.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempt with:', { email, password, rememberMe });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <h2>Login</h2>
          <p>Welcome back! Please enter your details.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=""
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password <span className="required">*</span></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=""
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">Forgot Password</Link>
            </div>
            
            <button type="submit" className="sign-in-button">Sign in</button>
            
            <div className="google-signin">
              <button type="button" className="google-button">
                <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google logo" width="18" height="18" />
                Sign in with Google
              </button>
            </div>
            
            <div className="signup-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
        <div className="login-image-container">
          <img src={drillingFluidImg} alt="Drilling fluid" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
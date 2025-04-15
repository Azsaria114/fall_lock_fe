import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import drillingFluidImg from '../assets/drilling-fluid.png';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the signup logic
    console.log('Signup attempt with:', { name, email, password, confirmPassword });
  };

  return (
    <div className="signup-page">
      <div className="login-container">
        <div className="login-form-container">
          <h2>Sign Up</h2>
          <p>Welcome !! Please enter your details.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder=""
              />
            </div>
            
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
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password <span className="required">*</span></label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder=""
              />
            </div>
            
            <button type="submit" className="submit-button">Submit</button>
            
            <div className="signup-link">
              Already have an account? <Link to="/login">Login</Link>
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

export default SignupPage;
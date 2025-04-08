import React from "react";
import "./Navbar.css"
import govEmblem from "../assets/tn_logo.png"; 
import profile from "../assets/profile.webp";

const Navbar = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={govEmblem} alt="Logo" className="logo" />
          <div className="nav-text">
            <h1>Government of Tamilnadu</h1>
            <span>தமிழ்நாடு அரசு</span>
          </div>
        </div>

        {/* Right Side (Register Button + Profile) */}
        <div className="nav-right">
          <button className="register-btn"style={{fontSize:"18px"}}>Register</button>
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

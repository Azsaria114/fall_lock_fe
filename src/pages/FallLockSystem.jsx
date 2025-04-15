import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import "./FallLockSystem.css";
import borewell from "../assets/borewell.png";
import rescue from "../assets/rescue.png";
import safety from "../assets/safety.png";
import Background from "../assets/Background.png";

const FallLockSystem = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />

       {/* Main Section */}
       <main className="main">
          <div className="bg-container">
          <img src={Background} alt="Background" className="bg-image" />
            <div className="text-overlay">
                <p style={{textAlign:"left"}}>Welcome to</p>
                <h2>Fall Lock System - Ensuring Borewell Safety</h2>
                <p style={{fontSize:"14px"}}>Every year, numerous accidents occur due to uncovered borewells, putting innocent lives, especially children, at risk. FallLock System is a government-approved initiative that provides a temporary Borewell Safety Kit to secure open borewells, preventing tragic incidents.With our easy registration and request system, users can apply for a Borewell Safety Kit and contribute to making their surroundings safer. Once the borewell is permanently sealed, the kit must be returned to ensure its availability for others in need.</p>
            </div>
          </div>

          {/* Steps Section */}
          <section>
          <div className="bg-containerbody">
      <div className="text-overlay">
      </div>

      <div className="process-container">
        <h2>How FallLock System Works?</h2>
        {[
          {
            number: 1,
            title: 'Register on the FallLock System Portal',
            description: 'Create an account by providing your name, contact details, and address...'
          },
          {
            number: 2,
            title: 'Submit Your Borewell Details and Request a Safety Kit',
            description: 'Enter the borewell location, current status (newly dug, under maintenance, etc.)...'
          },
          {
            number: 3,
            title: 'Request Verification and Kit Dispatch',
            description: 'Authorities will review your submission, conduct necessary verification...'
          },
          {
            number: 4,
            title: 'Install the Kit to Cover the Borewell Securely',
            description: 'Once you receive the kit, follow the provided instructions...'
          },
          {
            number: 5,
            title: 'Return the Kit After Permanent Closure',
            description: 'After sealing the borewell permanently, return the kit...'
          }
        ].map((step) => (
          <div key={step.number} className="step">
            <span className="step-number">{step.number}</span>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
          </section>

          {/* Features Section */}
          <section className="features">
  <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
    Why Choose Fall Lock System?
  </h2>
  <div className="feature-box">
    {/* Feature 1 - Life-Saving Solution */}
    <div className="feature-item">
      <h4 className="feature-title">🚑 A Life-Saving Solution</h4>
      <p>
        Open borewells pose a serious risk, especially to children. The FallLock
        System provides a temporary yet highly effective safety kit to cover
        borewells, preventing tragic accidents and ensuring public safety.
      </p>
    </div>

    {/* Feature 2 - Government-Supported Initiative */}
    <div className="feature-item">
      <h4 className="feature-title">🏛️ Government-Supported Initiative</h4>
      <p>
        This project is officially backed by government authorities, ensuring
        credibility, reliability, and seamless support for users. It aligns with
        national safety measures to reduce borewell-related incidents and protect lives.
      </p>
    </div>

    {/* Image 1 - Rescue Operation */}
    <div className="feature-item image-item">
      <img src={rescue} alt="Rescue Team" className="feature-image" />
    </div>

    {/* Feature 3 - Reusable & Sustainable */}
    <div className="feature-item">
      <h4 className="feature-title">🌍 Reusable & Sustainable</h4>
      <p>
        FallLock Safety Kits are collected, inspected, and sanitized before
        being redistributed. This ensures that safety measures remain
        cost-effective, eco-friendly, and available for future users,
        maximizing resource efficiency.
      </p>
    </div>

    {/* Image 2 - Borewell */}
    <div className="feature-item image-item">
      <img src={borewell} alt="Borewell" className="feature-image" />
    </div>

    {/* Feature 4 - Community Responsibility */}
    <div className="feature-item">
      <h4 className="feature-title">🤝 Community Responsibility</h4>
      <p>
        By using and returning the kit after the borewell is permanently sealed,
        you help ensure its availability for others in need. This collective
        effort strengthens public safety awareness and promotes a culture of
        responsibility in our communities.
      </p>
    </div>
  </div>
</section>




          {/* Call to Action */}
          {/* Call to Action */}
<section className="cta">
  <div className="cta-container">
    <img src={safety} alt="Safety" className="cta-image"/>
    
  </div>
</section>

        </main>
      </div>

  );
};

export default FallLockSystem;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import FallLockSystem from './components/FallLockSystem';
import './App.css';
import KitManagement from './sensor_kit/kitManagement';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/fallLockSystem" element={<FallLockSystem />} />
          <Route path="/sensorKit" element={<KitManagement />} />
          <Route path="/map" elemeent={<map />} />
          {/* Add more routes as needed */}
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
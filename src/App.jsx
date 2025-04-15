import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FallLockSystem from './pages/FallLockSystem';
// import './App.css';
import KitManagement from './sensor_kit/kitManagement';
import Register from './pages/Register';




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
          <Route path="/register" element={<Register />} />
          
      
          {/* Add more routes as needed */}
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
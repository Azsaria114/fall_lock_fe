import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
//import map from "../sensor_kit/mapPage.js"
  


const Sidebar = () => {
  const location = useLocation(); // Get current path to highlight active link

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/fallLockSystem">🏠 Home</Link>
          </li>
          <li>
            <Link to="#">👤 About</Link>
          </li>
          <li className={location.pathname === "/sensor-kit-management" ? "active" : ""}>
            <Link to="/sensorkit">🛠️ Sensor Kit Management</Link>
          </li>
          <li>
            <Link to="#">❔ Help</Link>
          </li>
          <li>
            <Link to="#">💬 FAQ</Link>
          </li>
        </ul>
      </nav>
      <button className="logout-button">🚪 Logout</button>
    </aside>
  );
};

export default Sidebar;

import React, { useState } from "react";
import "./kitManagement.css";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

// Import your pages/components
import Overview from "../components/sensor_kit/overview";
import Request from "../components/sensor_kit/request";
import Issued from "../components/sensor_kit/issued";
import Returned from "../components/sensor_kit/returned";

const KitManagement = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "Request":
        return <Request />;
      case "Issued":
        return <Issued />;
      case "Returned":
        return <Returned />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="kit-management-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main">
          <div className="tabs">
            {["Overview", "Request", "Issued", "Returned"].map((tab) => (
              <span
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default KitManagement;

import React from "react";
import "./kitManagement.css";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

const KitManagement = () => {
  return (
    <div className="kit-management-container">
      <Navbar />

      <div className="content">
        <Sidebar />

        <main className="kit-management-main">
          {/* 🔹 Tabs Navigation */}
          <div className="tabs">
            <span className="tab active">Overview</span>
            <span className="tab">Request</span>
            <span className="tab">Issued</span>
            <span className="tab">Returned</span>
          </div>

          {/* 🔹 Statistics Section */}
          <div className="stats">
            <div className="stat-box">
              <p>Total Kits Issued <span className="info-icon">ℹ️</span></p>
              <h2>28</h2>
            </div>
            <div className="stat-box">
              <p>Total Pending Request <span className="info-icon">😊</span></p>
              <h2>10</h2>
            </div>
            <div className="stat-box">
              <p>Total Kits Returned <span className="info-icon">↩️</span></p>
              <h2 className="red-text">30</h2>
            </div>
            <div className="stat-box">
              <p>Available Kits <span className="info-icon">📦</span></p>
              <h2>100</h2>
            </div>
          </div>

          {/* 🔹 Recent Kits Table */}
          <h3 className="recent-title">Recent</h3>
          <div className="table-container">
            <div className="table-controls">
              <input type="text" placeholder="🔍 Search" className="search-input" />
              <button className="filter-btn">Filter ⬇</button>
              <button className="export-btn">Export ⬇</button>
            </div>

            <table className="kit-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Username</th>
                  <th>Kit ID</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, name: "Ayesha", kit: "A20B1", status: "Issued", date: "18/3/25" },
                  { id: 2, name: "Susi Azsaria", kit: "B20A1", status: "Request", date: "18/3/25" },
                  { id: 3, name: "Adelin", kit: "A20A1", status: "Returned", date: "17/3/25" },
                  { id: 4, name: "Varsha", kit: "B20B1", status: "Issued", date: "17/3/25" },
                  { id: 5, name: "Grace", kit: "A23B1", status: "Returned", date: "16/3/25" }
                ].map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.kit}</td>
                    <td className={item.status.toLowerCase()}>{item.status}</td>
                    <td>{item.date}</td>
                    <td className="button-container">
                      <button className="view-btn">View</button>
                      <button className="update-btn">Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KitManagement;

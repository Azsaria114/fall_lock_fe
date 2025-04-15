import React, { useEffect, useState } from "react";
import "./issued.css"; // make sure to style as needed

const Issued = () => {
  const [issuedData, setIssuedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssuedData = async () => {
      try {
        const response = await fetch("/api/kits/issued"); // change endpoint as needed
        const data = await response.json();
        setIssuedData(data);
      } catch (error) {
        console.error("Error fetching issued kits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssuedData();
  }, []);

  return (
    <main className="issued-main">
      <div className="table-controls">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="search-input"
        />
        <div className="button-group">
          <button className="filter-btn">Filter ⬇</button>
          <button className="export-btn">Export ⬇</button>
        </div>
      </div>

      <div className="table-wrapper">
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : issuedData.length === 0 ? (
          <p className="no-data-text">No issued kits available</p>
        ) : (
          <table className="issued-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {issuedData.map((item, index) => (
                <tr key={item._id || index}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.contact}</td>
                  <td>{item.location}</td>
                  <td>{item.date}</td>
                  <td className={item.status.toLowerCase()}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default Issued;

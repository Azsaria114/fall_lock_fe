import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import "../sensor_kit/userkittracker.css";

function Userkittracker() {
  const [issueText, setIssueText] = useState("");
  const [queryText, setQueryText] = useState("");

  const handleIssueChange = (e) => {
    setIssueText(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQueryText(e.target.value);
  };

  const handleIssueSubmit = () => {
    alert("Issue submitted: " + issueText);
    setIssueText("");
  };

  const handleQuerySubmit = () => {
    alert("Query submitted: " + queryText);
    setQueryText("");
  };

  return (
    <div className="kit-status-container">
      <Navbar />
      <div className="kit-status-content">
        <Sidebar />
        <div className="kit-status-main">
          <h2 className="section-title">Kit Status</h2>

          <div className="kit-card">
            <div><strong>Kit Name:</strong> Kitname1</div>
            <div><strong>Kit ID:</strong> 01232</div>
            <div><strong>Status:</strong> Request Accepted</div>
            <div><strong>Start Date:</strong> 12/04/2025</div>
            <div><strong>End Date:</strong> 14/04/2025</div>
            <div><strong>Active Location:</strong> Valiyoor, Tirunelveli</div>
          </div>

          {/* Issues Section */}
          <h3 className="section-title">Issues</h3>
          <textarea
            className="issue-textarea"
            placeholder="Describe the issue..."
            value={issueText}
            onChange={handleIssueChange}
          />
          {issueText.trim() !== "" && (
            <button className="submit-btn" onClick={handleIssueSubmit}>
              Submit
            </button>
          )}

          {/* Queries Section */}
          <h3 className="section-title">Queries</h3>
          <textarea
            className="issue-textarea"
            placeholder="Write your query..."
            value={queryText}
            onChange={handleQueryChange}
          />
          {queryText.trim() !== "" && (
            <button className="submit-btn" onClick={handleQuerySubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Userkittracker;

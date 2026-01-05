import { useEffect, useState } from "react";
import axios from "../api/axios";

function Jobs() {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/jobs");
        setJobList(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs");
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading jobs...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Available Jobs</h2>
      {jobList.length === 0 ? (
        <p style={{ textAlign: "center" }}>No jobs available</p>
      ) : (
        <div style={gridStyle}>
          {jobList.map((job) => (
            <div key={job.id} style={cardStyle}>
              <h3 style={jobTitleStyle}>{job.title}</h3>
              <p style={jobDescStyle}>{job.description}</p>
              <button style={applyButtonStyle} onClick={() => alert(`Applied for ${job.title}`)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: "1000px",
  margin: "40px auto",
  padding: "0 20px",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "30px",
  fontSize: "32px",
  color: "#333",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  padding: "20px",
  transition: "transform 0.2s",
};

const jobTitleStyle = {
  marginBottom: "10px",
  fontSize: "20px",
  color: "#4CAF50",
};

const jobDescStyle = {
  fontSize: "16px",
  color: "#555",
  marginBottom: "15px",
};

const applyButtonStyle = {
  padding: "10px 15px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#4CAF50",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.3s",
};

export default Jobs;

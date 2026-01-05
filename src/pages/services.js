import React from "react";

const serviceData = [
  { title: "Web Development", desc: "Responsive and modern websites" },
  { title: "Mobile App Development", desc: "iOS & Android apps" },
  { title: "UI/UX Design", desc: "User-friendly interfaces" },
  { title: "Freelance Support", desc: "Get jobs & projects easily" },
];

function Services() {
  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Our Services</h1>
      <div style={styles.grid}>
        {serviceData.map((service, index) => (
          <div key={index} style={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f0f2f5",
    minHeight: "80vh",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    width: "250px",
    textAlign: "center",
    transition: "transform 0.2s",
  },
};

export default Services;

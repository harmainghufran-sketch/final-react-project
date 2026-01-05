function Home() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>“Empowering Connections. Building Futures.”</h1>
      <p style={subtitleStyle}>
        Discover top freelancers, grow your projects, and create something extraordinary together.
      </p>
      <div style={accentLine}></div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to right, #74ABE2, #5563DE)", // soft gradient
  color: "#fff",
  textAlign: "center",
  padding: "0 20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const titleStyle = {
  fontSize: "48px",
  fontWeight: "bold",
  marginBottom: "20px",
  lineHeight: "1.2",
  textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
};

const subtitleStyle = {
  fontSize: "20px",
  fontWeight: "400",
  marginBottom: "30px",
  maxWidth: "600px",
  lineHeight: "1.5",
};

const accentLine = {
  width: "80px",
  height: "4px",
  backgroundColor: "#FFD700", // golden accent
  borderRadius: "2px",
};

export default Home;

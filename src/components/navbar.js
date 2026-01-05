import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ user, setUser }) {
  const [hovered, setHovered] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token"); // assuming you store JWT in localStorage
    navigate("/login");
  };

  const getButtonStyle = (name, isHome = false) => ({
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    backgroundColor:
      hovered === name
        ? isHome
          ? "#0056b3"
          : "#45a049"
        : isHome
        ? "#007BFF"
        : "#4CAF50",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
    border: "none",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        backgroundColor: "#222",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          FreelanceHub
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Link
          to="/"
          style={getButtonStyle("home", true)}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered("")}
        >
          Home
        </Link>

        <Link
          to="/jobs"
          style={getButtonStyle("jobs")}
          onMouseEnter={() => setHovered("jobs")}
          onMouseLeave={() => setHovered("")}
        >
          Jobs
        </Link>

        <Link
          to="/services"
          style={getButtonStyle("services")}
          onMouseEnter={() => setHovered("services")}
          onMouseLeave={() => setHovered("")}
        >
          Services
        </Link>

        {/* Post Job always visible */}
        <Link
          to="/postjob"
          style={getButtonStyle("postjob")}
          onMouseEnter={() => setHovered("postjob")}
          onMouseLeave={() => setHovered("")}
        >
          Post Job
        </Link>

        {/* Profile and Logout visible only if user is logged in */}
        {user && (
          <>
            <Link
              to="/profile"
              style={getButtonStyle("profile")}
              onMouseEnter={() => setHovered("profile")}
              onMouseLeave={() => setHovered("")}
            >
              Profile ({user.name})
            </Link>
            <button
              style={getButtonStyle("logout")}
              onMouseEnter={() => setHovered("logout")}
              onMouseLeave={() => setHovered("")}
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

        {/* Login/Register visible only if no user */}
        {!user && (
          <>
            <Link
              to="/login"
              style={getButtonStyle("login")}
              onMouseEnter={() => setHovered("login")}
              onMouseLeave={() => setHovered("")}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={getButtonStyle("register")}
              onMouseEnter={() => setHovered("register")}
              onMouseLeave={() => setHovered("")}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-scroll";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "linear-gradient(120deg,rgb(6, 1, 10),rgb(9, 4, 17))",
          zIndex: 1000,
          padding: "10px 0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", color: "#fff"}}>
          <Link to="home" smooth duration={500} style={{ cursor: "pointer" }}>
            Home
          </Link>
          <Link to="projects" smooth duration={500} style={{ cursor: "pointer" }}>
            Projects
          </Link>
          <Link to="about" smooth duration={500} style={{ cursor: "pointer" }}>
            About
          </Link>
        </div>
      </nav>

      {/* Sections */}
      <Home />
      <Projects />
      <About />
    </div>
  );
};

export default App;


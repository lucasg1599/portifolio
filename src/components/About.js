import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" style={styles.aboutContainer}>
      <h2>About Me</h2>
      <p>
        I am a passionate developer with experience in building interactive and dynamic web
        applications. Check my work and get in touch!
      </p>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#f39c12" }}
        whileTap={{ scale: 0.9 }}
        style={styles.contactButton}
      >
        Contact Me
      </motion.button>
    </div>
  );
};

const styles = {
  aboutContainer: {
    padding: "50px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    textAlign: "center",
  },
  contactButton: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    background: "#e74c3c",
    color: "#fff",
  },
};

export default About;

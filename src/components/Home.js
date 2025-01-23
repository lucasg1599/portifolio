import React from "react";
import { 
  FaReactIcon, FaJsIcon, FaHtmlIcon, FaCssIcon, FaNodeJsIcon, 
  FaPythonIcon, FaJavaIcon, SiSpringbootIcon, SiGitIcon 
} from "./styled/styledIcons";

const Home = () => {
  return (
    <div id="home" style={styles.homeContainer}>
      <div style={styles.centeredContent}>
        <div style={styles.profileSection}>
          <img
            src="fotoperfil.jpg" 
            alt="Profile"
            style={styles.profileImage}
          />
          <h1 style={styles.welcomeText}>Bem-vindo ao meu Portfólio</h1>
        </div>
      </div>
      <div style={styles.aboutSection}>
        <h2>Sobre Mim</h2>
        <p style={styles.aboutText}>
          Sou um desenvolvedor apaixonado por criar aplicações web dinâmicas e interativas. 
          Gosto de aprender novas tecnologias e resolver problemas desafiadores.
        </p>
      </div>
      <div style={styles.skillsSection}>
        <h2>Tecnologias que uso</h2>
        <div style={styles.skillsList}>
          <div style={styles.skill}>
            <FaJsIcon />
            <span style={styles.skillText}>JavaScript</span>
          </div>
          <div style={styles.skill}>
            <FaReactIcon />
            <span style={styles.skillText}>React</span>
          </div>
          <div style={styles.skill}>
            <FaNodeJsIcon />
            <span style={styles.skillText}>Node.js</span>
          </div>
          <div style={styles.skill}>
            <FaCssIcon />
            <span style={styles.skillText}>CSS</span>
          </div>
          <div style={styles.skill}>
            <FaHtmlIcon />
            <span style={styles.skillText}>HTML</span>
          </div>
          <div style={styles.skill}>
            <FaPythonIcon />
            <span style={styles.skillText}>Python</span>
          </div>
          <div style={styles.skill}>
            <FaJavaIcon />
            <span style={styles.skillText}>Java</span>
          </div>
          <div style={styles.skill}>
            <SiSpringbootIcon />
            <span style={styles.skillText}>Spring Boot</span>
          </div>
          <div style={styles.skill}>
            <SiGitIcon />
            <span style={styles.skillText}>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  homeContainer: {
    height: "100vh", // Garante que a altura da tela é 100% da janela
    width: "100%",  // Ocupa toda a largura
    overflow: "hidden", // Impede rolagem
    background: "linear-gradient(120deg,rgb(6, 1, 10),rgb(9, 4, 17))",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
    padding: "0",  // Retira o padding para garantir que não há espaço adicional
  },
  centeredContent: {
    textAlign: "center",
    
  },
  profileSection: {
    marginTop: "50px", // Ajustado para reduzir o espaço
    textAlign: "center",
  },
  profileImage: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "20px",
  },
  welcomeText: {
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  },
  aboutSection: {
    backgroundColor: "rgb(18, 4, 31)",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "700px",
    margin: "auto",
    marginBottom: "20px", 
  },
  aboutText: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
  skillsSection: {
    backgroundColor: "rgb(18, 4, 31)",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
  },
  skillsList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "10px",
  },
  
  skillText: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Home;

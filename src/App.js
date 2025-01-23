import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Container>
      <Navbar>
        <NavLinks>
          <Link to="home" smooth duration={500}>
            Início
          </Link>
          <Link to="projects" smooth duration={500}>
            Projetos
          </Link>
        </NavLinks>
      </Navbar>
      <Home />
      <Projects />
    </Container>
  );
};

// Estilos
const Container = styled.div`
  font-family: "Arial, sans-serif";
  background: linear-gradient(120deg, rgb(6, 1, 10), rgb(9, 4, 17));
  color: #fff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default App;

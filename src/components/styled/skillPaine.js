import React from "react";
import styled from "styled-components";
import {
  FaReactIcon,
  FaJsIcon,
  FaHtmlIcon,
  FaCssIcon,
  FaNodeJsIcon,
  FaPythonIcon,
  FaJavaIcon,
  SiSpringbootIcon,
  SiGitIcon,
} from "./styledIcons";

const SkillsPanel = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    // Fecha o painel se clicar fora
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Panel>
        <Title>Minhas Habilidades</Title>
        <SkillsList>
          <Skill>
            <FaReactIcon />
            React
          </Skill>
          <Skill>
            <FaJsIcon />
            JavaScript
          </Skill>
          <Skill>
            <FaHtmlIcon />
            HTML5
          </Skill>
          <Skill>
            <FaCssIcon />
            CSS3
          </Skill>
          <Skill>
            <FaNodeJsIcon />
            Node.js
          </Skill>
          <Skill>
            <FaPythonIcon />
            Python
          </Skill>
          <Skill>
            <FaJavaIcon />
            Java
          </Skill>
          <Skill>
            <SiSpringbootIcon />
            Spring Boot
          </Skill>
          <Skill>
            <SiGitIcon />
            Git
          </Skill>
        </SkillsList>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </Panel>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end; /* Alinha à direita */
  align-items: center;
  z-index: 1000;
`;

const Panel = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Skill = styled.li`
  font-size: 18px;
  margin: 10px 0;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background: #f39c12;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background: #e67e22;
  }
`;

export default SkillsPanel;

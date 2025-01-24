import React, { useState } from "react";
import styled from "styled-components";
import SkillsPanel from "./styled/skillPaine";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <Container id="home">
      <Title>Bem-vindo ao Meu Portfólio</Title>
      <ProfileContainer>
        <ProfileImage src="fotoperfil.jpg" alt="Minha Foto" />
        <ProfileDescription>
          <h2>Olá, eu sou Lucas Guilherme</h2>
          <p>
            Sou desenvolvedor(a) apaixonado(a) por tecnologia, com experiência
            em diversas ferramentas e linguagens. Estou sempre em busca de novos
            desafios e aprimoramento contínuo. Aqui, você pode conferir alguns
            dos meus projetos e habilidades.
          </p>
        </ProfileDescription>
      </ProfileContainer>

      <Button onClick={() => setShowSkills(true)}>Minhas Hard Skills</Button>

      {showSkills && <SkillsPanel onClose={() => setShowSkills(false)} />}
      <FlexContainer>
        <ResumeContent>
          <DownloadButton href="/Curriculo Lucas.pdf" download>
            Baixar CV
          </DownloadButton>
        </ResumeContent>

        <ContactContainer>
          <ContactLinks>
            <ContactLink
              href="https://www.linkedin.com/in/lucas-guilherme-piassa-ferreira-916250149/"
              target="_blank"
            >
              <FaLinkedin style={{ marginRight: "8px" }} /> LinkedIn
            </ContactLink>
            <ContactLink href="https://github.com/lucasg1599" target="_blank">
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </ContactLink>
            <ContactLink href="https://wa.me/5524981384333" target="_blank">
              <FaWhatsapp style={{ marginRight: "8px" }} /> WhatsApp
            </ContactLink>
          </ContactLinks>
          <ContactLink href="mailto:lucasg1599@gmail.com">
            lucasg1599@gmail.com
          </ContactLink>
        </ContactContainer>
      </FlexContainer>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
  background-color: #292929;
  color: white;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  cursor: default; /* Evita que o cursor pareça editável */

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Alinha ao centro */
  margin-bottom: 40px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfileDescription = styled.div`
  max-width: 500px;
  text-align: center; /* Centraliza o texto dentro da descrição */

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    cursor: default; /* Evita que o cursor pareça editável */
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    cursor: default; /* Evita que o cursor pareça editável */
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
`;


const Button = styled.button`
  background-color: #f39c12;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 40px;
  transition: 0.3s;

  &:hover {
    background-color: #e67e22;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

const ContactContainer = styled.div`
  margin-top: 0; 
  align-items: center;
  text-align: center;
`;

const DownloadButton = styled.a`
  background-color: #f39c12;
  color: #fff;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #e67e22;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
  }
`;


const ResumeContent = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexContainer = styled.div`
  display: flex;
  margin-top:-20px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const ContactLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ContactLink = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  cursor: pointer; /* Mantém o cursor como ponteiro para links */

  &:hover {
    border-bottom: 2px solid #fff;
  }

  & > svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Home;

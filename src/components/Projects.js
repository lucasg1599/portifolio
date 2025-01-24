import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {
  FaReactIcon,
  FaJsIcon,
  FaHtmlIcon,
  FaCssIcon,
} from "./styled/styledIcons";

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      image: "loginEregistro.png",
      title: "Login e Registro com Firebase",
      description:
        "Sistema de Login e Registro de Usuários desenvolvido com React.js e Firebase Authentication. Este projeto permite a autenticação segura de usuários com validação de CPF e e-mail. Inclui tratamento de erros personalizados, como a verificação de e-mail já cadastrado, além de ser responsivo para diferentes dispositivos.",
      link: "https://loginlucas.netlify.app/",
      technologies: [
        { icon: <FaReactIcon />, name: "React" },
        { icon: <FaJsIcon />, name: "JavaScript" },
        { icon: <FaHtmlIcon />, name: "HTML" },
        { icon: <FaCssIcon />, name: "CSS" },
      ],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: projects.length > 1,
  };

  return (
    <Container id="projects">
      <Title>Meus Projetos</Title>
      <SliderContainer>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <ProjectCardWrapper
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <ContentWrapper>
                <ImageContainer>
                  <img src={project.image} alt={project.title} />
                </ImageContainer>
                
                <DescriptionCard isVisible={hovered === index}>
                  <DescriptionText>{project.description}</DescriptionText>
                </DescriptionCard>
              </ContentWrapper>
              <ContainerSkills>
                <ProjectTechnologies>
                    {project.technologies.map((tech, index) => (
                      <TechIcon key={index}>
                        {tech.icon}
                        <TechName>{tech.name}</TechName>
                      </TechIcon>
                    ))}
                  </ProjectTechnologies>
                </ContainerSkills>
              <ProjectTitle hovered={hovered === index}>
                {project.title}
              </ProjectTitle>
              <ProjectLink href={project.link} target="_blank">
                Ver Projeto
              </ProjectLink>
            </ProjectCardWrapper>
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
};
const DescriptionCard = styled.div`
  position: absolute;
  top: 0;
  left: 4;
  width: 100%;
  height: 90%; 
  background-color: rgba(51, 51, 51, 0.9); /* Transparência para dar destaque */
  color: #fff;
  padding: 15px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "20px")});
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: transform 0.5s ease, opacity 0.5s ease;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};

  @media (max-width: 768px) {
    height: 175px;
    width: 75%; 
    padding: 10px;
  }
`;

const TechName = styled.p`
  margin-top: 5px;
  font-size: 14px;  
  color: #fff;
  text-align: center;  
`;
const ProjectTechnologies = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

const ContainerSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechIcon = styled.div`
  width: 60px;  
  height: 60px;  
  display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
  text-align: center; 

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;


const Container = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #292929;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #f39c12;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SliderContainer = styled.div`
  max-width: 40%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectCardWrapper = styled.div`
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const ImageContainer = styled.div`
  flex: 0.5;
  width: 100%;
  height: 200px;
  border: 2px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: ${({ isVisible }) => (isVisible ? 0.6 : 1)}; /* Reduz a visibilidade da imagem */
  }

  &:hover img {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    height: 100px;
    width: 80%;

    img {
      object-fit: contain;
    }
  }
`;


const DescriptionText = styled.p`
  font-size: 16px; 
  line-height: 1.4;
  text-align: center;
   
  
  @media (max-width: 768px) {
    font-size: 13px; 
  line-height: 1.4;
  text-align: center;

    img {
      object-fit: contain;
    }
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  color: ${({ hovered }) => (hovered ? "#f39c12" : "#fff")};
  font-weight: ${({ hovered }) => (hovered ? "bold" : "normal")};
  transition: color 0.3s ease, font-weight 0.3s ease;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #f39c12;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default Projects;

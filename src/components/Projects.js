import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      image: "loginEregistro.png",
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      link: "https://example.com/projeto1",
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
                {/* Exibe o card de descrição com controle de visibilidade */}
                <DescriptionCard isVisible={hovered === index}>
                  <DescriptionText>{project.description}</DescriptionText>
                </DescriptionCard>
              </ContentWrapper>
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

// Todos os componentes styled vão aqui, incluindo DescriptionCard, agora com o delay

const DescriptionCard = styled.div`
  flex: 0.5; /* Ocupa metade do espaço */
  height: 200px;
  background-color: #333;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transform: scale(${({ isVisible }) => (isVisible ? "1" : "0.9")});
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: transform 1s ease, opacity 1s ease;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")}; /* Previne interações durante a transição */

  @media (max-width: 768px) {
    flex: 1;
    height: auto;
    margin-left: 5px;
  }
`;

const Container = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #1f1f1f;

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
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const ImageContainer = styled.div`
  flex: 0.5; /* Ocupa metade do espaço */
  height: 200px;
  border: 2px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &:hover img {
    transform: scale(0.95); /* A imagem diminui quando o mouse passa */
  }
`;

const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
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

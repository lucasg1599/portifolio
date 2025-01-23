import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Projects = () => {
  const projectImages = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container id="projects">
      <Title>Meus Projetos</Title>
      <SliderContainer>
        <Slider {...sliderSettings}>
          {projectImages.map((img, index) => (
            <ProjectCard key={index}>
              <img src={img} alt={`Projeto ${index + 1}`} />
            </ProjectCard>
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
};

const Container = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #1f1f1f;
  color: #fff;

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
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export default Projects;

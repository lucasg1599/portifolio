import React from "react";
import Slider from "react-slick";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Projeto 1",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Projeto 2",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Projeto 3",
      image: "https://via.placeholder.com/300",
    },
    // Adicione mais projetos conforme necessário
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
        breakpoint: 1024, // Para telas de tamanhos médios
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Para telas menores
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" style={styles.projectsContainer}>
      <h2 style={styles.heading}>Meus Projetos</h2>
      {projects.length === 0 ? (
        <p style={styles.noProjectsMessage}>Nenhum projeto disponível</p>
      ) : (
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                style={styles.projectImage}
              />
              <h3 style={styles.projectTitle}>{project.title}</h3>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

const styles = {
  projectsContainer: {
    padding: "50px",
    background: "linear-gradient(120deg, rgb(6, 1, 10), rgb(9, 4, 17))", // Cor do fundo do container
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  heading: {
    fontSize: "36px",
    color: "#fff", // Texto em branco
    marginBottom: "40px",
    textAlign: "center",
  },
  projectCard: {
    backgroundColor: "#fff", // Cor de fundo do cartão de projeto
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "10px",
    width: "300px", // Ajustando a largura dos cartões para garantir que fiquem visíveis
  },
  projectImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  projectTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  noProjectsMessage: {
    fontSize: "18px",
    color: "#fff",
    textAlign: "center",
  },
};

export default Projects;

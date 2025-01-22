import React, { useEffect } from "react";
import Slider from "react-slick";
import ScrollReveal from "scrollreveal";

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal(".animated-section", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      id="projects"
      className="animated-section"
      style={{ padding: "50px", backgroundColor: "#ecf0f1" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>My Projects</h2>
      <Slider {...sliderSettings}>
        <div>
          <img src="https://via.placeholder.com/300" alt="Project 1" style={{ width: "100%" }} />
          <h3 style={{ textAlign: "center" }}>Project 1</h3>
        </div>
        <div>
          <img src="https://via.placeholder.com/300" alt="Project 2" style={{ width: "100%" }} />
          <h3 style={{ textAlign: "center" }}>Project 2</h3>
        </div>
        <div>
          <img src="https://via.placeholder.com/300" alt="Project 3" style={{ width: "100%" }} />
          <h3 style={{ textAlign: "center" }}>Project 3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
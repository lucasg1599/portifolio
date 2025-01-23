import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container id="about">
      <Title>Sobre Mim</Title>
      <Text>
        Sou um desenvolvedor apaixonado por criar aplicações inovadoras e
        resolver problemas com criatividade. Sempre busco aprender novas
        tecnologias e aplicar as melhores práticas no desenvolvimento.
      </Text>
      <Button>Entre em Contato</Button>
    </Container>
  );
};

const Container = styled.section`
  padding: 60px 20px;
  background-color: #292929;
  text-align: center;
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

const Text = styled.p`
  margin: 20px auto;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background: #f39c12;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #e67e22;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export default About;

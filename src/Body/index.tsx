import { FC } from "react";
// import "./App.css";
import { Container, Card, CardTitle, LinkButton, Ruler } from "./styles";

const Body: FC = () => {
  return (
    <Container>
      <Ruler />
      <Card>
        <CardTitle>Glassmorphism is awesome</CardTitle>
        <p>
          A modern CSS UI library based on the glassmorphism design principles
          that will help you quickly design and build beautiful websites and
          applications.
        </p>
        <LinkButton href="https://ui.glass">Read more</LinkButton>
      </Card>

      <Card>
        <CardTitle>Card 2</CardTitle>
        <p>
          A modern CSS UI library based on the glassmorphism design principles
          that will help you quickly design and build beautiful websites and
          applications.
        </p>
        <LinkButton href="https://ui.glass">Read more</LinkButton>
      </Card>

      <Card>
        <CardTitle>Card 3</CardTitle>
        <p>
          A modern CSS UI library based on the glassmorphism design principles
          that will help you quickly design and build beautiful websites and
          applications.
        </p>
        <LinkButton href="https://ui.glass">Read more</LinkButton>
      </Card>
    </Container>
  );
};

export default Body;

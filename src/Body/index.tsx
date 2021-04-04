import { FC, SVGAttributes } from "react";
// import "./App.css";
import {
  Container,
  // Card,
  // CardTitle,
  // LinkButton,
  Box,
  Ruler,
  Wrapper,
} from "./styles";
import { Activity, Sun, Moon, Zap } from "react-feather";

type Yoga = {
  title: string;
  icon: SVGAttributes<SVGElement>;
  link: string;
};

export const yogaTypes: Yoga[] = [
  {
    title: "all",
    icon: <Activity />, // or feather?
    link: "/all",
  },
  {
    title: "vinyasa",
    icon: <Sun />,
    link: "/vinyasa",
  },
  {
    title: "bikram",
    icon: <Zap />,
    link: "/bikram",
  },
  {
    title: "yin",
    icon: <Moon />,
    link: "/yin",
  },
];

const Body: FC = () => {
  return (
    <Container>
      <Ruler />
      <Wrapper>
        {yogaTypes.map(({ icon, link, title }) => {
          return (
            <Box key={link}>
              <>
                {icon}
                <h3> {title} </h3>
              </>
            </Box>
          );
        })}
      </Wrapper>

      {/* <Card>
        <CardTitle>Vinyasa Sun Icon</CardTitle>
        <p>
          A modern CSS UI library based on the glassmorphism design principles
          that will help you quickly design and build beautiful websites and
          applications.
        </p>
        <LinkButton href="https://ui.glass">Read more</LinkButton>
      </Card>

      <Card>
        <CardTitle>Bikram Zap Icon</CardTitle>
        <p>
          A modern CSS UI library based on the glassmorphism design principles
          that will help you quickly design and build beautiful websites and
          applications.
        </p>
        <LinkButton href="https://ui.glass">Read more</LinkButton>
      </Card>

      <Card>
        <CardTitle>Yin Moon Icon</CardTitle>
        <p>
          A modern CSS UI library based on the glassmorphism design principles
          that will help you quickly design and build beautiful websites and
          applications.
        </p>
        <LinkButton href="https://ui.glass">Read more</LinkButton>
      </Card> */}
    </Container>
  );
};

export default Body;

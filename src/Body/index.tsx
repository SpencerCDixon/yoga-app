import { FC, SVGAttributes } from "react";
// import "./App.css";
import { Container, Box, Ruler, Wrapper } from "./styles";
import { Sun, Moon } from "react-feather";
import Spa from "@material-ui/icons/Spa";
import Fire from "@material-ui/icons/WhatshotOutlined";

type Yoga = {
  title: string;
  icon: SVGAttributes<SVGElement>;
  link: string;
};

export const yogaTypes: Yoga[] = [
  {
    title: "all",
    icon: <Spa />, // or feather?
    link: "/all",
  },
  {
    title: "vinyasa",
    // icon: <Sun />,
    // icon: <LocalFlorist />,
    icon: <Sun />,
    link: "/vinyasa",
  },
  {
    title: "bikram",
    // icon: <Zap />,
    icon: <Fire />,
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
            <Box key={link} to={link}>
              {icon}

              <h3> {title} </h3>
            </Box>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Body;

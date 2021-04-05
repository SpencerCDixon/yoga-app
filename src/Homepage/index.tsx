import { FC } from "react";
import Header from "../Header";
import Body from "../Body";
import { Wrapper } from "./styles";

const Main: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
};

export default Main;

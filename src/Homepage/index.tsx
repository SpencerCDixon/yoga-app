import { FC } from "react";
import Header from "../Header";
import Body from "../Body";
import { Wrapper, TopCloud, BottomCloud, MidCloud } from "./styles";

const Main: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
      <TopCloud />
      <MidCloud />
      <BottomCloud />
    </Wrapper>
  );
};

export default Main;

import { FC } from "react";
import { HeaderContainer, Title } from "./styles";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Title>yoga app</Title>
      <p>explore yoga poses based on practice type. </p>
      <p>enjoy and namaste.</p>
    </HeaderContainer>
  );
};

export default Header;

import { FC, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { yogaTypes } from "../index";
import {
  Header,
  Background,

  // FloatingButton,
  ChevronLeft,
  Spa,
  Button,
  ButtonContainer,
} from "./styles";

const AllPage: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Background>
      <Header>
        <ChevronLeft size={50} onClick={handleBack} />
        {/* <Title>All Poses</Title> */}
        {/* <Title>{yogaTypes[0].icon}</Title> */}
        <Spa />
        <div>
          {yogaTypes.map((yoga) => {
            return (
              <ButtonContainer to={yoga.link}>
                <Button $active={pathname === yoga.link}>{yoga.title}</Button>
              </ButtonContainer>
            );
          })}
        </div>
      </Header>

      <div>All Page</div>
    </Background>
  );
};

export default AllPage;

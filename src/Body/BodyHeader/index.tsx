import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { yogaTypes } from "../index";
import { Header, ChevronLeft, Spa, ButtonContainer, Button } from "./styles";

const BodyHeader = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Header>
      <ChevronLeft size={50} onClick={handleBack} />

      <Spa />
      <div>
        {yogaTypes.map((yoga) => {
          return (
            <ButtonContainer key={yoga.link} to={yoga.link}>
              <Button $active={pathname === yoga.link}>{yoga.title}</Button>
            </ButtonContainer>
          );
        })}
      </div>
    </Header>
  );
};

export default BodyHeader;

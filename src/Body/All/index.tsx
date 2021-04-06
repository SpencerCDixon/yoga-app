import { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { yogaTypes } from "../index";
import {
  Header,
  Background,
  // FloatingButton,
  ChevronLeft,
  Title,
} from "./styles";

const AllPage: FC = () => {
  const history = useHistory();

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Background>
      <Header>
        <ChevronLeft size={50} onClick={handleBack} />
        <Title>Back All Page</Title>
        <div>
          {yogaTypes.map((yoga) => {
            return <button>{yoga.title}</button>;
          })}
        </div>
      </Header>

      <div>All Page</div>
    </Background>
  );
};

export default AllPage;

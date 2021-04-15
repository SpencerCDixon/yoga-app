import { FC, useCallback, SVGAttributes } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { yogaTypes } from "../index";
import {
  Header,
  ChevronLeft,
  Spa,
  ButtonContainer,
  Button,
  Sun,
  Moon,
  Fire,
} from "./styles";

type Props = {
  icon: string;
};

type Icon = {
  [key: string]: SVGAttributes<SVGAElement>;
};

const IconComponent: Icon = {
  all: <Spa />,
  vinyasa: <Sun size={50} />,
  bikram: <Fire />,
  yin: <Moon size={50} />,
};

const BodyHeader: FC<Props> = ({ icon }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Header>
      <ChevronLeft size={50} onClick={handleBack} />

      {/* <Spa /> */}
      {IconComponent[icon]}
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

import { FC } from "react";
import { data } from "../../data";
import {
  Background,
  Card,
  BodyContainer,
  BottomSpa,
  Image,
  SVGContainer,
  Sanskrit,
  PoseName,
  TextContainer,
} from "./styles";
import BodyHeader from "../BodyHeader";

const AllPage: FC = () => {
  console.log(data.length, data);

  return (
    <Background>
      <BodyHeader />

      <BottomSpa />

      <BodyContainer>
        {data.map((pose, index) => {
          return (
            <Card key={pose.id}>
              <SVGContainer>
                <Image href={pose.img_url} />
              </SVGContainer>

              <TextContainer>
                <Sanskrit>{pose.sanskrit_name}</Sanskrit>

                <PoseName>{pose.english_name}</PoseName>
              </TextContainer>
            </Card>
          );
        })}
      </BodyContainer>
    </Background>
  );
};

export default AllPage;

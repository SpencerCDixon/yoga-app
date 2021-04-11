import { FC } from "react";
import { data } from "../../data";
import {
  Background,
  Card,
  BodyContainer,
  BottomSpa,
  Image,
  SVGContainer,
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

              <div>
                {index}:{pose.english_name}
                {pose.sanskrit_name}
              </div>
            </Card>
          );
        })}
      </BodyContainer>
    </Background>
  );
};

export default AllPage;

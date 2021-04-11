import styled from "styled-components";

import SpaIcon from "@material-ui/icons/Spa";

export const Background = styled.main`
  /* padding: -5px;
  margin: -5px; */

  /* background-color: #fec89a;
  background-image: -webkit-linear-gradient(150deg, #fec89a 35%, #f8edeb 35%);
  min-height: 400px; */
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px calc(var(--size) / 6) calc(var(--size) / 3) rgba(0, 0, 0, 0.1);

  z-index: 1;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid white;
  backdrop-filter: blur(10px);

  color: white;
  flex: 0 1 25%;
  flex: 0 1 calc(25% - 1em);

  svg {
    color: white !important;
    fill: white !important;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  left: 0px;
  padding: 0px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BottomSpa = styled(SpaIcon)`
  position: fixed;
  font-size: 250px !important;
  right: 5%;
  bottom: 2%;
  color: #f8edeb;
  z-index: -999999;
`;

export const SVGContainer = styled.svg`
  width: 50px;
  height: 50px;
`;

export const Image = styled.image`
  color: white;
  fill: white;
  height: 40px;
  width: 40px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Sanskrit = styled.h1`
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 5px;
  text-align: center;
`;

export const PoseName = styled.p`
  margin: 0;
`;

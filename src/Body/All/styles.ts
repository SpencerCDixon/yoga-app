import styled, { css } from "styled-components";
import { ChevronLeft as ChevronLeftBase } from "react-feather";
import { Link as LinkBase } from "react-router-dom";
import SpaIcon from "@material-ui/icons/Spa";

export const Background = styled.main`
  background-color: #f8edeb;
  background-image: -webkit-linear-gradient(150deg, #f8edeb 40%, #ffd7ba 35%);
  background-size: cover;
  /* min-height: 100vh; */
  height: calc(100vh - 10px);
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px calc(var(--size) / 6) calc(var(--size) / 3) rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;

  z-index: 1;
  padding: 1rem;
  margin-bottom: 5rem;
  border: 1px solid white;
  backdrop-filter: blur(10px); */

  display: flex;
  /* background-color: #d8e2dc; */
  background-color: #c89afe;
  justify-content: space-between;
  align-items: center;
  /* width: 90%; */
  width: 100%;
  position: absolute;
  top: 0;
  padding: 1rem;

  svg {
    font-size: 50px !important;
  }
`;

export const ChevronLeft = styled(ChevronLeftBase)`
  color: white;
`;

export const Spa = styled(SpaIcon)`
  color: white;
`;

export const active = css`
  /* border-bottom: 10px solid #d8e2dc; */
  /* border-bottom: 5px solid white; */
  background-color: white;
  color: #c89afe;
`;

export const ButtonContainer = styled(LinkBase)``;

export const Button = styled.button<{ $active?: boolean }>`
  padding: 0.5rem;
  color: white;
  /* background-color: #f8edeb;
  color: #fec89a;
  border: 1px solid #f8edeb; */
  background-color: #c89afe;
  /* background-color: #d8e2dc; */
  border: 1px solid white;
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  ${({ $active }) => $active && active};
`;

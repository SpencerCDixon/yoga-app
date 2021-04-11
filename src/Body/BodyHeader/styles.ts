import styled, { css } from "styled-components";
import { ChevronLeft as ChevronLeftBase } from "react-feather";
import { Link as LinkBase } from "react-router-dom";
import SpaIcon from "@material-ui/icons/Spa";

export const Background = styled.main`
  /* padding: -5px;
  margin: -5px; */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  font-size: 1.1rem;
  align-items: center;
  background-color: #c89afe;

  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);

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
  background-color: white;
  color: #c89afe;
`;

export const ButtonContainer = styled(LinkBase)``;

export const Button = styled.button<{ $active?: boolean }>`
  padding: 0.5rem;
  color: white;
  background-color: #c89afe;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  ${({ $active }) => $active && active};
`;

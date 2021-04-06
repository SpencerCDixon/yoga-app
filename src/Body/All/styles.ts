import styled from "styled-components";
import { ChevronLeft as ChevronLeftBase } from "react-feather";

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
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: center;
  width: 90%;
  /* background-color: rgba(255, 255, 255, 0.4); */
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px calc(var(--size) / 6) calc(var(--size) / 3) rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;

  z-index: 1;
  padding: 1.5rem;
  margin-bottom: 5rem;
  border: 1px solid white;
  backdrop-filter: blur(10px);
`;

export const FloatingButton = styled.button`
  position: absolute;
  top: 20px;
  left: 15px;
  height: 5rem;
  width: 5rem;
  /* background-color: rgba(255, 255, 255, 0.4); */
  /* border-radius: 50%; */
  border: none;
  /* backdrop-filter: blur(10px); */
  color: white;
  z-index: 9999;
`;

export const ChevronLeft = styled(ChevronLeftBase)`
  /* height: 2rem;
  width: auto;
  fill: white;
  border: none; */
  color: white;
`;

export const Title = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 3rem;
  text-shadow: black;
`;

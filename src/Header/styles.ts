import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;

  width: 75%;

  /* glassmorphism */
  /* background: rgba(255, 255, 255, 0.7); */
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(10px);

  /* border: 1px solid white; */
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px calc(var(--size) / 6) calc(var(--size) / 3) rgba(black, 0.1);
  color: white;
  font-weight: 400;
`;

export const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 10px;
`;

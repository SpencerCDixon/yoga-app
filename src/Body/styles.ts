import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Card = styled.div`
  width: 15%;
  height: auto;
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem;

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

export const LinkButton = styled.a`
  margin-top: 1rem;
  padding: 0.6rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const CardTitle = styled.h3`
  color: white;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  /* padding: 1rem; */
  /* background-color: gray; */
  border-radius: 0.5rem;
`;

export const Ruler = styled.div`
  border-top: 10px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.05);

  position: absolute;
  top: 50%;
  height: 50%;
  left: 0%;
  right: 0%;
`;

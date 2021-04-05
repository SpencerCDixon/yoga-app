import styled from "styled-components";

export const Background = styled.body`
  background-color: #f8edeb;
  background-image: -webkit-linear-gradient(150deg, #f8edeb 40%, #ffd7ba 35%);
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  min-width: 70%;
  min-height: 5rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0.5rem;
  box-shadow: 0px calc(var(--size) / 6) calc(var(--size) / 3) rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: 600;
  font-size: 5rem;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 1.5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

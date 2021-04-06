import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

// export const Card = styled.div`
//   width: 15%;
//   height: auto;
//   padding: 2rem;
//   border-radius: 1rem;
//   margin: 1rem;

//   /* glassmorphism */

//   /* border: 1px solid white; */
//   background-color: rgba(255, 255, 255, 0.1);
//   border-radius: 0.5rem;
//   box-shadow: 0px calc(var(--size) / 6) calc(var(--size) / 3) rgba(0, 0, 0, 0.1);
//   color: white;
//   font-weight: 400;
// `;

// export const LinkButton = styled.a`
//   margin-top: 1rem;
//   padding: 0.6rem;
//   border-radius: 1rem;
//   background-color: rgba(255, 255, 255, 0.3);
// `;

// export const CardTitle = styled.h3`
//   color: white;
//   font-weight: 600;
//   margin-top: 0;
//   margin-bottom: 0.5rem;
//   font-size: 1.2rem;
//   /* padding: 1rem; */
//   /* background-color: gray; */
//   border-radius: 0.5rem;
// `;

export const Ruler = styled.div`
  border-top: 10px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.05);

  position: absolute;
  top: 50%;
  height: 50%;
  left: 0%;
  right: 0%;
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 16rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;

  svg {
    --size: 8rem;
    --transition-duration: 500ms;
    --transition-easing: ease-out;

    width: var(--size);
    height: var(--size);
  }
`;

// export const Box = styled.div`
export const Box = styled(ReactLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-width: 13rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--foreground-color);
  font-size: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  border-radius: 0.5rem;
  box-shadow: 0px calc(var(--size) / 6) calc(var(--size) / 3) rgba(0, 0, 0, 0.1);

  transition: transform var(--transition-duration) var(--transition-easing);

  overflow: hidden;

  /* position: absolute; */

  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.4);
    width: 60%;
    height: 100%;
    top: 0%;
    left: -125%;

    transform: skew(45deg);

    position: absolute;

    transition: left var(--transition-duration) var(--transition-easing);
  }

  &:hover {
    transform: translateY(-25%);

    &::before {
      left: 150%;
    }
  }

  h3 {
    color: white;
    /* text-shadow: 1px 1px #ff0000; */
    z-index: 1;
    margin: 0;
    font-size: 1.5rem;
  }
`;

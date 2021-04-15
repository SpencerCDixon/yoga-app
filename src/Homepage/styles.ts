import styled from "styled-components";
// import { Cloud as CloudBase } from "react-feather";
import CloudBase from "@material-ui/icons/Cloud";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const TopCloud = styled(CloudBase)`
  position: absolute;
  font-size: 200px !important;
  color: #f8edeb;
  /* top: 3rem; */
  top: 0;
  left: 2rem;
  z-index: -99999;
`;

export const BottomCloud = styled(CloudBase)`
  position: absolute;
  font-size: 500px !important;

  /* top: 3rem; */
  bottom: -5rem;
  left: 10%;
  /* left: 10rem; */

  /* color: url(#gradient-vertical) #fdb99b; */
  color: #f8edeb;
  /* fill: #cf8bf3; */
  z-index: -999999;
`;

export const MidCloud = styled(CloudBase)`
  position: absolute;
  font-size: 400px !important;
  color: #f8edeb;
  /* top: 3rem; */
  bottom: 30%;
  right: -1.5rem;
  /* z-index: -99999; */

  /* fill: #cf8bf3; */
  z-index: -999999;
`;

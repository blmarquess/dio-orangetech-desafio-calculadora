import styled from "styled-components";

export const MainBoard = styled.div`
  width: 480px;
  height: 100%;
  display: grid;
  grid-template-columns: 8fr;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas: "display display display" "keyboard keyboard keyboard" "keyboard keyboard keyboard";
  grid-gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #514e4e59;
`;

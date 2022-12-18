import styled from "styled-components";

export const MainBoard = styled.div`
  width: 480px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 50vh;
  grid-template-areas:
    "display"
    "keyboard";
  grid-gap: 2px;
  padding: 1rem;
  margin: auto;
  box-sizing: border-box;
  background-color: #514e4e59;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 700;
`;
// atual em 303.44

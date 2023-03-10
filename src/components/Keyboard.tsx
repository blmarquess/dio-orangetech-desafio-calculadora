import styled from "styled-components";

export const KeyboardDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 5fr;
  grid-template-areas: "numbers operations";
  grid-gap: 1px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #39343493;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.1rem;
`;

import styled from "styled-components";

export const KeyboardNumber = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1px;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 700;
`;

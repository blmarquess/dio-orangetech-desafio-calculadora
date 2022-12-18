import styled from "styled-components";

export const OperationBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ff7e0e;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ff9e0e;
  }
`;

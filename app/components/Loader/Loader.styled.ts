import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Spinner = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  color: ${props => props.theme.primary};
  border: solid 10px;
  border-left-color: transparent;
  animation: ${rotate} 1s linear infinite;
`;

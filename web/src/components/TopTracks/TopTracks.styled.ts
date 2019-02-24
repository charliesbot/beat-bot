import styled from "styled-components";
import { mediaQuery } from "../../utils/style";

export const Wrapper = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -6.25rem;
  margin-top: -6.25rem;
`;

export const Content = styled.div`
  position: relative;
  color: white;
  transform-style: preserve-3d;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  ${mediaQuery.mobile`
    width: 1000;
    `};
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 10000;
  top: 0;
  left: 0;
`;

export const Container = styled.div``;

import styled from "@emotion/styled";

export const NavBar = styled.header`
  height: 3.5rem;
  background-color: white;
  transform: translate3d(0px, 0px, 10px);
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.4);
`;

export const Wrapper = styled.main`
  width: 3.125rem;
  height: 3.125rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.5625rem;
  margin-top: -1.5625rem;
`;

export const Content = styled.aside`
  display: grid;
  grid-template-columns: repeat(7, 200px);
  grid-template-rows: repeat(7, 200px);
  position: relative;
  color: white;
  transform-style: preserve-3d;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

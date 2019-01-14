import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50rem;
  height: 50rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25rem;
  margin-top: -25rem;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 50rem);
  width: 1200px;
  color: white;
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

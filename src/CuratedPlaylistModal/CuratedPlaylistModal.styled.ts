import styled from "styled-components";
import { darken } from "polished";
import { mediaQuery } from "../utils/style";

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 4rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  color: gray;
  border: solid 1px;
  &:hover {
    color: white;
    background-color: gray;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 110rem;
  height: 70vh;
  max-height: 70vh;
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
`;

export const Body = styled.section`
  flex: 1;
  padding: 4rem;
  overflow: auto;
`;

export const Footer = styled.button`
  width: 100%;
  height: 15rem;
  border: none;
  color: white;
  background-color: #ff395f;
  cursor: pointer;
  transition: all ease 200ms;
  &:hover {
    background-color: ${darken(0.2, "#ff395f")};
  }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);
  ${mediaQuery.mobile`
    justify-content: flex-start;
    align-items: flex-start;
    ${Container} {
      height: 100%;
      max-height: 100%;
      width: 100%;
    }
    `};
`;

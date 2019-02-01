import styled from "styled-components";
import { darken } from "polished";

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

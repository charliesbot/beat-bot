import styled from "@emotion/styled";
import { mediaQuery } from "../../utils/style";

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  border: solid gray 1px;
  border-radius: 50%;
  background-color: white;
`;

export const Header = styled.header`
  padding: 0.5rem 1rem;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  width: 100%;
  min-height: 80px;
  max-height: 80px;
  padding: 1rem;
`;

export const NextStep = styled.button`
  width: 50rem;
  color: white;
  border-radius: 4px;
  background-color: black;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  ${mediaQuery("mobile")} {
    width: 100%;
  }
`;


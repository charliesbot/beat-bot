import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  padding: 4rem;
`;

export const NextStep = styled.button`
  width: 50rem;
  color: white;
  border-radius: 4px;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

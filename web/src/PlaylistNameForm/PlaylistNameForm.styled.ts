import styled, { css } from "styled-components";

const formCss = css`
  width: 90%;
  height: 50px;
  padding: 4rem;
  background-color: lightgrey;
  border: none;
  border-radius: 3px;
`;

export const Input = styled.input`
  ${formCss};
`;

export const Description = styled.textarea`
  ${formCss};
  height: 30rem;
  margin-top: 4rem;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

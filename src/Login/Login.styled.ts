import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  padding: 2rem 25rem;
  cursor: pointer;
  color: white;
  background-color: #1db954;
  border-radius: 500px;
  transition: background-color ease 200ms;
  border: none;
  &:hover {
    background-color: #1ed760;
  }
`;

import styled from "styled-components";
import { FaSpotify } from "react-icons/fa";

export const SpotifyIcon = styled(FaSpotify)`
  margin-right: 2rem;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15rem;
  padding: 2rem 25rem;
  cursor: pointer;
  color: white;
  background-color: #1db954;
  border-radius: 500px;
  transition: all ease 200ms;
  border: none;
  &:hover {
    transform: scale(1.1);
    background-color: #1ed760;
  }
`;

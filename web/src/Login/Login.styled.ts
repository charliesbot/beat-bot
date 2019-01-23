import styled from "styled-components";
import { FaSpotify } from "react-icons/fa";
import image from "../images/audience.jpeg";
import { mediaQuery } from "../utils/style";

export const Header = styled.h1`
  line-height: 1.4;
`;

export const SpotifyIcon = styled(FaSpotify)`
  margin-right: 2rem;
  height: 6rem;
  width: 6rem;
`;

export const Overlay = styled.section`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 30%, transparent 80%);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15rem;
  padding: 2rem 8rem;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10rem;
  width: 100%;
  height: 100%;
  color: white;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  ${LoginButton}, ${Header} {
    z-index: 1;
  }
  ${mediaQuery.mobile`
    ${Header} {
      font-size: 1.5em;
    }
    align-items: center;
    text-align: center;
    `};
`;

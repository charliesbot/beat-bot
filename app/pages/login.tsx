import React from "react";
import { FaSpotify } from "react-icons/fa";
import { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { Link } from "../components/Link/Link.styled";

const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 1;
  position: fixed;
  bottom: 1rem;
  a {
    margin-left: 0.5rem;
  }
`;

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.75rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  color: white;
  background-color: #1db954;
  text-decoration: none;
  border-radius: 500px;
  transition: all ease 200ms;
  border: none;
  &:hover {
    transform: scale(1.1);
    background-color: #169443;
  }
`;

const Header = styled.section`
  line-height: 1.5;
  margin-bottom: 2rem;
  .welcome {
    margin: 0;
    font-size: 3rem;
  }

  .discover,
  .create {
    font-size: 1.5rem;
  }
`;

const SpotifyIcon = styled(FaSpotify)`
  margin-right: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;

const Overlay = styled.section`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 30%, transparent 80%);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem;
  width: 100%;
  height: 100%;
  color: white;
  background-image: url("/static/audience.jpg");
  background-size: cover;
  background-position: center;
  ${LoginButton}, ${Header} {
    z-index: 1;
  }
`;

const LoginPage: NextPage = () => {
  return (
    <Layout title="Beat bot 🤖">
      <Container>
        <Header>
          <h1 className="welcome">Welcome to Beat Bot!</h1>
          <span className="discover">
            Discover new music based on the songs you love.
          </span>
          <br />
          <span className="create">
            Create the playlist that will rock your day.
          </span>
        </Header>
        <LoginButton href="/api/auth.ts">
          <SpotifyIcon size="6rem" />
          Login with Spotify
        </LoginButton>
        <Overlay />
        <Footer>
          Done with ❤️by
          <Link
            href="https://twitter.com/charliesbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            @charliesbot
          </Link>
        </Footer>
      </Container>
    </Layout>
  );
};

export default LoginPage;

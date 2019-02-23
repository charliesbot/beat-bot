import React, { useEffect } from "react";
import {
  Header,
  Container,
  Overlay,
  LoginButton,
  SpotifyIcon
} from "./Login.styled";

const Login: React.FC<any> = props => {
  useEffect(() => {
    const token = window.location.hash
      .substr(1)
      .split("&")[0]
      .split("=")[1];

    if (token) {
      sessionStorage.setItem("token", token);
      props.history.push("/");
    }
  });

  return (
    <Container>
      <Header>
        Mix your favorite songs. <br />
        Find your next playlist. <br />
        Fall in love. Again.
      </Header>
      <LoginButton href="/.netlify/functions/auth">
        <SpotifyIcon size="6rem" />
        Login with Spotify
      </LoginButton>
      <Overlay />
    </Container>
  );
};

export default Login;

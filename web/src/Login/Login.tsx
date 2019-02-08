import React, { useEffect } from "react";
import {
  Header,
  Container,
  Overlay,
  LoginButton,
  SpotifyIcon
} from "./Login.styled";

type Props = {
  requestLogin: (_: any) => void;
};

const Login = (props: Props) => {
  const { requestLogin } = props;
  useEffect(() => {
    const token = window.location.hash
      .substr(1)
      .split("&")[0]
      .split("=")[1];

    if (token) {
      requestLogin({ token });
    }
  });

  return (
    <Container>
      <Header>
        Mix your favorite songs. <br />
        Find your next playlist. <br />
        Fall in love. Again.
      </Header>
      <LoginButton href="http://localhost:8888/login">
        <SpotifyIcon size="6rem" />
        Login with Spotify
      </LoginButton>
      <Overlay />
    </Container>
  );
};

export default Login;

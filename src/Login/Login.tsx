import React, { useEffect } from "react";
import { openLoginPopup } from "./Login.utils";
import { Container, LoginButton, SpotifyIcon } from "./Login.styled";

type Props = {
  requestLogin: () => void;
};

type RequestLogin = (_: { token: string }) => void;

const triggerLogin = (requestLogin: RequestLogin) => () => {
  const popup = openLoginPopup();
  window.spotifyCallback = async (token: string) => {
    if (popup) {
      popup.close();
      requestLogin({ token });
    }
  };
};

const Login = (props: Props) => {
  const { requestLogin } = props;
  useEffect(() => {
    const token = window.location.hash
      .substr(1)
      .split("&")[0]
      .split("=")[1];
    if (token) {
      window.opener.spotifyCallback(token);
    }
  });

  return (
    <Container>
      <LoginButton onClick={triggerLogin(requestLogin)}>
        <SpotifyIcon size="6rem" />
        Login with Spotify
      </LoginButton>
    </Container>
  );
};

export default Login;

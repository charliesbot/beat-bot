import React, { useEffect } from "react";
import { openLoginPopup } from "./Login.utils";
import { LoginButton } from "./Login.styled";

const triggerLogin = (requestLogin: any) => () => {
  const popup = openLoginPopup();
  window.spotifyCallback = async (token: any) => {
    if (popup) {
      popup.close();
      requestLogin({ token });
    }
  };
};

const Login = (props: any) => {
  const { requestUser } = props;
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
    <div>
      <LoginButton onClick={triggerLogin(requestUser)}>Login</LoginButton>
    </div>
  );
};

export default Login;

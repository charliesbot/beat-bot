import React from "react";
import { LoginButton } from "./Login.styled";

const client_id = "9eddbd6ad5384b629eae7f0656108325";
const scopes = "user-top-read";
const redirect_uri =
  "https://s.codepen.io/leemartin/debug/ffc5867e9dd2a8119bdf9c7735e021cc";

const triggerLogin = () => {
  window.open(
    `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`,
    "Login with Spotify",
    "width=800,height=600"
  );
};

const Login = () => {
  return (
    <div>
      <LoginButton onClick={triggerLogin}>Login</LoginButton>
    </div>
  );
};

export default Login;

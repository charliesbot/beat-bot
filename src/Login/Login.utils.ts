const client_id = "c548f2e4e6a048c19f351bc8da52f27c";
const scopes = "user-top-read";
const redirect_uri = `${window.location.origin}/login`;
console.log(redirect_uri);

export const openLoginPopup = () =>
  window.open(
    `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`,
    "Login with Spotify",
    "width=800,height=600"
  );

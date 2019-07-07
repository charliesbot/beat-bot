import axios from "axios";

const apiBase = "https://api.spotify.com/v1";

function SpotifyClient(token: string) {
  const client = axios.create({
    baseURL: apiBase,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  return client;
}

export { SpotifyClient };

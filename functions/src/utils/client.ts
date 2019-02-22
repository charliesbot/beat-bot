import axios from "axios";

const apiBase = "https://api.spotify.com/v1";

function SpotifyClient(token: string) {
  const client = axios.create({
    baseURL: apiBase,
    timeout: 1000,
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json"
    }
  });

  return client;
}

export { SpotifyClient };

import simpleOauth, { ModuleOptions } from "simple-oauth2";
import { NowRequest } from "@now/node";

const spotifyApi = "https://accounts.spotify.com";

export const config = {
  clientId: process.env.SPOTIFY_CLIENT_ID || "",
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
  tokenHost: spotifyApi,
  authorizePath: `${spotifyApi}/authorize`,
  tokenPath: `${spotifyApi}/api/token`,
  profilePath: "https://api.spotify.com/v1/me",
};

function authInstance(credentials: ModuleOptions) {
  if (!credentials.client.id) {
    throw new Error("MISSING REQUIRED ENV VARS. Please set SPOTIFY_CLIENT_ID");
  }
  if (!credentials.client.secret) {
    throw new Error(
      "MISSING REQUIRED ENV VARS. Please set SPOTIFY_CLIENT_SECRET",
    );
  }
  // return oauth instance
  return simpleOauth.create(credentials);
}

export function getBaseUrl({ headers }: NowRequest) {
  return `${headers["x-forwarded-proto"]}://${headers["x-forwarded-host"]}`;
}

/* Create oauth2 instance to use in our two functions */
export default authInstance({
  client: {
    id: config.clientId,
    secret: config.clientSecret,
  },
  auth: {
    tokenHost: config.tokenHost,
    tokenPath: config.tokenPath,
    authorizePath: config.authorizePath,
  },
});

import simpleOauth, { ModuleOptions } from "simple-oauth2";
import "dotenv/config";

const spotifyApi = "https://accounts.spotify.com";
const siteUrl = process.env.URL || "http://localhost:9000";

export const config = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  /* Intercom oauth API endpoints */
  tokenHost: spotifyApi,
  authorizePath: `${spotifyApi}/authorize`,
  tokenPath: `${spotifyApi}/api/token`,
  profilePath: "https://api.spotify.com/v1/me",
  /* redirect_uri is the callback url after successful signin */
  redirect_uri: `${siteUrl}/.netlify/functions/auth-callback`
};

function authInstance(credentials: ModuleOptions) {
  if (!credentials.client.id) {
    throw new Error("MISSING REQUIRED ENV VARS. Please set SPOTIFY_CLIENT_ID");
  }
  if (!credentials.client.secret) {
    throw new Error(
      "MISSING REQUIRED ENV VARS. Please set SPOTIFY_CLIENT_SECRET"
    );
  }
  // return oauth instance
  return simpleOauth.create(credentials);
}

/* Create oauth2 instance to use in our two functions */
export default authInstance({
  client: {
    id: config.clientId,
    secret: config.clientSecret
  },
  auth: {
    tokenHost: config.tokenHost,
    tokenPath: config.tokenPath,
    authorizePath: config.authorizePath
  }
});

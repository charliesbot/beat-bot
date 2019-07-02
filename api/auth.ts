import { NowRequest, NowResponse } from "@now/node";
import oauth2, { config } from "./utils/oauth";

const scope = "user-top-read playlist-modify-private";

export default function(_: NowRequest, res: NowResponse) {
  /* Generate authorizationURI */
  const authorizationURI = oauth2.authorizationCode.authorizeURL({
    redirect_uri: config.redirect_uri,
    scope,
    /* State helps mitigate CSRF attacks & Restore the previous state of your app */
    state: ""
  });

  res.statusCode = 302;
  res.setHeader("Location", authorizationURI);
  res.setHeader("Cache-Control", "no-cache");
  res.end();
}

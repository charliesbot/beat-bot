import { NowRequest, NowResponse } from "@now/node";
import oauth2, { getBaseUrl } from "./utils/oauth";

const scope = "user-top-read playlist-modify-private";

export default function(request: NowRequest, res: NowResponse) {
  /* Generate authorizationURI */
  const baseUrl = getBaseUrl(request);

  const authorizationURI = oauth2.authorizationCode.authorizeURL({
    redirect_uri: `${baseUrl}/api/auth-callback.ts`,
    scope,
    /* State helps mitigate CSRF attacks & Restore the previous state of your app */
    state: "",
  });

  res.statusCode = 302;
  res.setHeader("Location", authorizationURI);
  res.setHeader("Cache-Control", "no-cache");
  res.end();
}

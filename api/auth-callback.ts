import { NowRequest, NowResponse } from "@now/node";
import oauth2, { getBaseUrl } from "./utils/oauth";

/* Function to handle intercom auth callback */
export default async (req: NowRequest, res: NowResponse) => {
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  const { code } = req.query;
  const baseUrl = getBaseUrl(req);
  // redirect_uri: `${baseUrl}/api/auth-callback.ts`,
  // redirect_frontend: `${baseUrl}/callback`,

  /* Take the grant code and exchange for an accessToken */
  const maybeToken = await oauth2.authorizationCode.getToken({
    code: code as string,
    redirect_uri: `${baseUrl}/api/auth-callback.ts`,
  });

  const result = oauth2.accessToken.create(maybeToken);

  // return results to browser
  const redirectUri = `${baseUrl}/callback?access_token=${result.token.access_token}`;

  res.statusCode = 302;
  res.setHeader("Location", redirectUri);
  res.setHeader("Cache-Control", "no-cache");
  res.end();
};

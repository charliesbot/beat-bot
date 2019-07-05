import { NowRequest, NowResponse } from "@now/node";
import oauth2, { config } from "./utils/oauth";

/* Function to handle intercom auth callback */
export default async (req: NowRequest, res: NowResponse) => {
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  const { code } = req.query;

  /* Take the grant code and exchange for an accessToken */
  const maybeToken = await oauth2.authorizationCode.getToken({
    code: code as string,
    redirect_uri: config.redirect_uri,
  });

  const result = oauth2.accessToken.create(maybeToken);

  // return results to browser
  const redirectUri = `${config.redirect_frontend}?access_token=${result.token.access_token}`;

  res.statusCode = 302;
  res.setHeader("Location", redirectUri);
  res.setHeader("Cache-Control", "no-cache");
  res.end();
};

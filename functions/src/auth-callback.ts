import oauth2, { config } from "./utils/oauth";

/* Function to handle intercom auth callback */
const handler = async (event, context, callback) => {
  const code = event.queryStringParameters.code;
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  const state = event.queryStringParameters.state;

  /* Take the grant code and exchange for an accessToken */
  const maybeToken = await oauth2.authorizationCode.getToken({
    code: code,
    redirect_uri: config.redirect_uri
  });

  const result = oauth2.accessToken.create(maybeToken);

  // return results to browser
  const redirectUri = `${config.redirect_frontend}#access_token=${
    result.token.access_token
  }`;

  const response = {
    statusCode: 302,
    headers: {
      Location: redirectUri,
      "Cache-Control": "no-cache" // Disable caching of this response
    },
    body: "" // return body for local dev
  };

  return callback(null, response);
};

export { handler };

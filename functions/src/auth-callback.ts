import getUserData from "./utils/getUserData";
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

  const token = oauth2.accessToken.create(maybeToken);

  console.log("accessToken", token.token.access_token);

  const user = await getUserData(token.token.access_token);

  console.log("auth token", token);
  // Do stuff with user data
  console.log("user data", user);
  // Do other custom stuff
  console.log("state", state);
  // return results to browser
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      user,
      token
    })
  });

  // console.log("Access Token Error", error.message);
  // console.log(error);
  // return callback(null, {
  // statusCode: error.statusCode || 500,
  // body: JSON.stringify({
  // error: error.message
  // })
  // });

  // .catch(error => {

  // });
};

export { handler };

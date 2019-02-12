import { Context, Callback, APIGatewayEvent } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

export const handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const params = event.queryStringParameters;
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello world ${Math.floor(Math.random() * 10)}`,
      params
    })
  };

  callback(undefined, response);
};

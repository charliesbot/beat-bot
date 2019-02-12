const handler = (_, __, callback) => {
  return callback(null, {
    statusCode: 200,
    body: "Success!",
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    }
  });
};

export { handler };

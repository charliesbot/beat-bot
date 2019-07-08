export const getBaseUrl = (ctx: any) => {
  const headers = (ctx && ctx.req && ctx.req.headers) || {};

  const protocol = headers["x-forwarded-proto"] || location.protocol;
  const host = headers["x-forwarded-host"] || location.host;

  return `${protocol}://${host}`;
};

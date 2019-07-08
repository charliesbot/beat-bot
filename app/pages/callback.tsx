import React from "react";
import Router from "next/router";
import { NextPage } from "next";
import { setCookie } from "nookies";
import { getBaseUrl } from "../utils/location";

const Callback: NextPage = () => {
  return <div />;
};

Callback.getInitialProps = async ctx => {
  const { access_token } = ctx.query;
  if (Array.isArray(access_token)) {
    return {};
  }

  const baseUrl = getBaseUrl(ctx);

  setCookie(ctx, "token", access_token, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  if (ctx.res) {
    ctx.res.writeHead(302, { Location: `${baseUrl}/` });
    ctx.res.end();
  } else {
    Router.push("/");
  }

  return {};
};

export default Callback;

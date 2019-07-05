import cookie from "js-cookie";

export const saveCookie = async ({ token }: { token?: string }) => {
  if (!token) {
    return false;
  }

  cookie.set("token", token, { expires: 1 });
};

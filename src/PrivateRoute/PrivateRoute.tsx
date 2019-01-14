import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "src/utils/Auth0Service";
import paths from "src/constants/routes";
import { Props } from "./PrivateRoute.type";

const PrivateRouteCallback = (authenticator: Partial<typeof AuthService>) => ({
  component: Component,
  ...rest
}: Props) => (
  <Route
    {...rest}
    render={() => {
      if (authenticator.isAuthenticated && authenticator.isAuthenticated()) {
        return <Component {...rest} />;
      }

      return <Redirect to={paths.LOGIN_PATH} />;
    }}
  />
);

export { PrivateRouteCallback };

export default PrivateRouteCallback(AuthService);

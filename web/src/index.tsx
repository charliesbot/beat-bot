import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { ApolloProvider } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyle";
import store, { history } from "./store";
import App from "./components/App";
import theme from "./theme";
import { client } from "./client";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ConnectedRouter>
      <GlobalStyle />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

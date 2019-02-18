import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyle";
import store, { history } from "./store";
import App from "./components/App";
import theme from "./theme";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/.netlify/functions/graphql"
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
        <GlobalStyle />
      </Provider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

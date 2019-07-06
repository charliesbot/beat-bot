import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import withApolloClient from "../lib/with-apollo-client";

class CustomApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(CustomApp);

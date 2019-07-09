import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-client";
import withApolloClient from "../lib/with-apollo-client";

type Props = {
  pageProps: unknown;
  component: React.FC<unknown>;
  apolloClient: ApolloClient<unknown>;
};

class CustomApp extends App<Props> {
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

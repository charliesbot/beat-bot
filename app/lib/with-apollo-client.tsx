import React from "react";
import { NextPage } from "next";
import { parseCookies } from "nookies";
import Head from "next/head";
import { getDataFromTree } from "react-apollo";
import initApollo from "./init-apollo";
import { getBaseUrl } from "../utils/location";

type ApolloProps = React.FC & NextPage & { apolloState: any; baseUrl: string };

const WithClient = (App: any) => {
  const Apollo = (props: ApolloProps) => {
    const { apolloState, baseUrl } = props;
    const apolloClient = initApollo(apolloState, {
      getToken: () => parseCookies().token,
      baseUrl,
    });

    return <App {...props} apolloClient={apolloClient} baseUrl={baseUrl} />;
  };

  Apollo.displayName = "withApollo(App)";

  Apollo.getInitialProps = async (props: any) => {
    const { Component, router, ctx } = props;

    const baseUrl = getBaseUrl(ctx);

    let appProps = {};

    if (App.getInitialProps) {
      appProps = await App.getInitialProps(props);
    }

    // Run all GraphQL queries in the component tree
    // and extract the resulting data
    const apollo = initApollo(
      {},
      { getToken: () => parseCookies(props).token, baseUrl },
    );

    if (!process.browser) {
      try {
        // Run all GraphQL queries
        await getDataFromTree(
          <App
            baseUrl={baseUrl}
            {...appProps}
            Component={Component}
            router={router}
            apolloClient={apollo}
          />,
        );
      } catch (error) {
        console.error("Error while running `getDataFromTree`", error); // eslint-disable-line no-console
      }

      // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind();
    }

    // Extract query data from the Apollo store
    const apolloState = apollo.cache.extract();

    return {
      ...appProps,
      baseUrl,
      apolloState,
    };
  };

  return Apollo;
};

export default WithClient;

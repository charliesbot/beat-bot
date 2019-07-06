import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

const isServer = !process.browser;

let apolloClient: ApolloClient<any> | null = null;

const create = (initialState: {}, { getToken }: any) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:3000/graphql",
    credentials: "same-origin",
    fetch: !isServer ? fetch : undefined,
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  return new ApolloClient({
    connectToDevTools: !isServer,
    ssrMode: isServer,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};

export default (initialState = {}, options: any) => {
  if (!process.browser) {
    return create(initialState, options);
  }
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
};


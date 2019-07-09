import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

type Options = {
  getToken: () => string;
  baseUrl: string;
};
type CreateFn = (initialState: {}, options: Options) => ApolloClient<unknown>;

const isServer = !process.browser;

let apolloClient: ApolloClient<unknown> | null = null;

if (!process.browser) {
  // @ts-ignore
  global.fetch = fetch;
}

const create: CreateFn = (initialState, { getToken, baseUrl }) => {
  const httpLink = createHttpLink({
    uri: `${baseUrl}/graphql`,
    credentials: "same-origin",
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

const initApollo: CreateFn = (initialState = {}, options) => {
  if (!process.browser) {
    return create(initialState, options);
  }

  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
};

export default initApollo;

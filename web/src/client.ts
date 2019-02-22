import ApolloClient, { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
  fetchOptions: {
    credentials: "include"
  },
  request: async operation => {
    const token = window.sessionStorage.getItem("token");
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      // sendToLoggingService(graphQLErrors);
    }
    if (networkError) {
    }
  },
  cache: new InMemoryCache(),
  clientState: {
    defaults: {
      isConnected: true
    },
    resolvers: {}
  }
});

export { client };

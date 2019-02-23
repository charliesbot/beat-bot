import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "./typesResolvers/schema";
import { SpotifySDK } from "./utils/spotifySDK";

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  context: async ({ event }) => {
    const token = event.headers.authorization;
    return { client: SpotifySDK(token) };
  }
});

export const handler = server.createHandler();

import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "./typesResolvers/schema";
import { SpotifySDK } from "./utils/spotifySDK";

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization;
    return { client: SpotifySDK(token) };
  },
});

export default server.createHandler();

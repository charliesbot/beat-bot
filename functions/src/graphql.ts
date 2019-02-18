import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "./typesResolvers/schema";

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers
});

export const handler = server.createHandler();

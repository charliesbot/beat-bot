import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "./typesResolvers/schema";
import { SpotifySDK } from "./utils/spotifySDK";

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let token = req.headers.authorization;
    token =
      "Bearer BQBUwt5c_AS6hYNHhfLdHY-a6UHy2ZgACu3eTvtS7TmxOglGJ6RqGiyL0fz0pDZoOAzmJ5Oq_LhrhD_OgsDAAo7XkPD8IE5GTonZw7fhvW0JR3XGcvjdV9TkGEH1b0CMB267Jn0qeVyYmYwEcSUhwV6jqDPV0K7gdcZoaEu6nvO26BUiNThDJUk";
    return { client: SpotifySDK(token) };
  },
});

export default server.createHandler();

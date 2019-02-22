import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    topTracks: [Song]
  }
`;

export const resolvers = {
  Query: {
    topTracks: async (_, __, { client }) => {
      return await client.getTopTracks("tracks");
    }
  }
};

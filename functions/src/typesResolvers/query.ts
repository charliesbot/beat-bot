import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    user: User
    playlist(playlistId: ID!): Playlist
    topTracks: [Song]
    recommendations(seedTracks: [ID]): [Song]
  }
`;

export const resolvers = {
  Query: {
    user: async (_, __, { client }) => {
      return await client.getUser();
    },
    playlist: async (_, { playlistId }, { client }) => {
      return await client.getPlaylist(playlistId);
    },
    topTracks: async (_, __, { client }) => {
      return await client.getTopTracks("tracks");
    },
    recommendations: async (_, variables, { client }) => {
      return await client.getRecommendationsBasedOnSeeds({
        seedTracks: variables.seedTracks
      });
    }
  }
};

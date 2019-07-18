import { gql, IFieldResolver } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    user: User
    playlist(playlistId: ID!): Playlist!
    topTracks: [Song!]!
    recommendations(seedTracks: [ID]): [Song!]!
  }
`;

const user: IFieldResolver<any, any> = async (_, __, { client }) => {
  return await client.getUser();
};

const playlist: IFieldResolver<any, any> = async (
  _,
  { playlistId },
  { client },
) => {
  return await client.getPlaylist(playlistId);
};

const topTracks: IFieldResolver<any, any> = async (_, __, { client }) => {
  return await client.getTopTracks("tracks");
};

const recommendations: IFieldResolver<any, any> = async (
  _,
  variables,
  { client },
) => {
  return await client.getRecommendationsBasedOnSeeds({
    seedTracks: variables.seedTracks,
  });
};

export const resolvers = {
  Query: {
    user,
    playlist,
    topTracks,
    recommendations,
  },
};

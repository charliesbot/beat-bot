import { gql } from "apollo-server-lambda";
import { SpotifySDK } from "../utils/spotifySDK";

export const typeDefs = gql`
  type Query {
    topTracks: [Song]
  }
`;

export const resolvers = {
  Query: {
    topTracks: () => SpotifySDK.getTopTracks("tracks")
  }
};

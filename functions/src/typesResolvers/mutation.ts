import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type CreatePlaylistWithSongsPayload {
    playlist: Playlist!
  }

  type Mutation {
    createPlaylistWithSongs(
      userId: String!
      playlistName: String!
      uris: [String]!
    ): CreatePlaylistWithSongsPayload
  }
`;

export const resolvers = {
  Mutation: {
    createPlaylistWithSongs: async (_, variables, { client }) => {
      const { userId, playlistName, uris } = variables;
      const playlist = await client.createPlaylist(userId, playlistName);
      await client.addTracksToPlaylist(playlist.id, uris);
      return { playlist };
    }
  }
};

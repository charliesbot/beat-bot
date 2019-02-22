import { gql } from "apollo-boost";

export const CREATE_PLAYLIST = gql`
  mutation createPlaylistWithSongs(
    $userId: String!
    $playlistName: String!
    $uris: [String]!
  ) {
    createPlaylistWithSongs(
      userId: $userId
      playlistName: $playlistName
      uris: $uris
    ) {
      playlist {
        id
        name
        externalUrls {
          spotify
        }
      }
    }
  }
`;

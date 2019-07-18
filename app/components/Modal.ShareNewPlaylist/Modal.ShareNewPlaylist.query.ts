import gql from "graphql-tag";

export const GET_USER = gql`
  query SharePlaylistGetUser {
    user {
      id
    }
  }
`;

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

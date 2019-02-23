import { gql } from "apollo-boost";

export const GET_TOP_TRACKS_AND_USER = gql`
  query GetTopTracksAndUser {
    user {
      id
      name
    }
    topTracks {
      id
      name
      previewUrl
      artists {
        id
        name
      }
      album {
        name
        images {
          width
          height
          url
        }
      }
    }
  }
`;

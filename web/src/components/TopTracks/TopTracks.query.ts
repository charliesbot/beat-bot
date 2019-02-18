import { gql } from "apollo-boost";

export const GET_TOP_TRACKS = gql`
  query GetTopTracks {
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

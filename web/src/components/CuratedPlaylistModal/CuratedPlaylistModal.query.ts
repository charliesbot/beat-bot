import { gql } from "apollo-boost";

export const GET_RECOMMENDATIONS = gql`
  query GetRecommendations($seedTracks: [ID]!) {
    recommendations(seedTracks: $seedTracks) {
      id
      name
      previewUrl
      uri
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

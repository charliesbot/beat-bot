import gql from "graphql-tag";

export default gql`
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

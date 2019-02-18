import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Song {
    id: ID
    name: String
    previewUrl: String
    album: Album
    artists: [Artist]
  }
`;

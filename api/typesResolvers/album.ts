import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Album {
    id: ID
    name: String
    uri: String
    images: [Image]
  }
`;

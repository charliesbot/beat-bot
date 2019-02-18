import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Album {
    id: ID
    name: String
    uri: String
    images: [Image]
  }
`;

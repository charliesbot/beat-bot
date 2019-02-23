import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Artist {
    id: ID
    href: String
    name: String
    type: String
    uri: String
  }
`;

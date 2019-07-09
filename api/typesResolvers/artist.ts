import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Artist {
    id: ID
    href: String
    name: String
    type: String
    uri: String
  }
`;

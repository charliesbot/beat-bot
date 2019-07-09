import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type ExternalUrls {
    spotify: String
  }
`;

import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type ExternalUrls {
    spotify: String
  }
`;

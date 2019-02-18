import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Image {
    width: Int
    height: Int
    url: String
  }
`;

import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Image {
    width: Int
    height: Int
    url: String
  }
`;

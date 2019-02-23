import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
    externalUrls: ExternalUrls
    href: String
    images: [Image]
    type: String
    uri: String
  }
`;

export const resolvers = {
  User: {
    name: obj => obj.display_name,
    externalUrls: obj => obj.external_urls
  }
};

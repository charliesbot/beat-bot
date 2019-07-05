import { gql } from "apollo-server-micro";

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
    name: (obj: any) => obj.display_name,
    externalUrls: (obj: any) => obj.external_urls,
  },
};

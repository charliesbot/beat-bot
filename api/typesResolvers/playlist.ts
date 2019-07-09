import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Playlist {
    id: ID
    collaborative: Boolean!
    description: String
    name: String!
    href: String!
    images: [Image!]!
    externalUrls: ExternalUrls!
    public: Boolean!
    snapshotId: ID!
    uri: String!
    type: String!
  }
`;

export const resolvers = {
  Playlist: {
    externalUrls: (obj: any) => obj.external_urls,
  },
};

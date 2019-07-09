import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Song {
    id: ID
    name: String
    previewUrl: String
    album: Album
    artists: [Artist]
    uri: String
  }
`;

export const resolvers = {
  Song: {
    previewUrl: (obj: any) => obj.preview_url,
  },
};

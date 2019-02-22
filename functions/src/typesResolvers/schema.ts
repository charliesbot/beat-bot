import merge from "lodash/merge";
import { typeDefs as Query, resolvers as queryResolvers } from "./query";
import {
  typeDefs as Mutation,
  resolvers as mutationResolvers
} from "./mutation";
import { typeDefs as Song, resolvers as songResolvers } from "./song";
import { typeDefs as Artist } from "./artist";
import { typeDefs as Album } from "./album";
import { typeDefs as Image } from "./image";
import { typeDefs as ExternalUrls } from "./externalUrls";
import {
  typeDefs as Playlist,
  resolvers as playlistResolvers
} from "./playlist";

export const typeDefs = [
  Query,
  Mutation,
  Song,
  Album,
  Artist,
  Image,
  ExternalUrls,
  Playlist
];

export const resolvers = merge(
  queryResolvers,
  mutationResolvers,
  songResolvers,
  playlistResolvers
);

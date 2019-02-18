// import merge from "lodash/fp/merge";
import { typeDefs as Query, resolvers as queryResolvers } from "./query";
import { typeDefs as Song } from "./song";
import { typeDefs as Artist } from "./artist";
import { typeDefs as Album } from "./album";
import { typeDefs as Image } from "./image";

export const typeDefs = [Query, Song, Album, Artist, Image];
export const resolvers = queryResolvers;

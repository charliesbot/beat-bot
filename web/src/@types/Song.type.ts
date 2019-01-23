import { Image } from "./Image.type";

type Album = {
  images: Image[];
};

export type Song = {
  id: string;
  album: Album;
};

export type Maybe<T> = T | null;

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  user?: Maybe<User>;

  playlist?: Maybe<Playlist>;

  topTracks: Song[];

  recommendations?: Maybe<(Maybe<Song>)[]>;
}

export interface User {
  id?: Maybe<string>;

  name?: Maybe<string>;

  externalUrls?: Maybe<ExternalUrls>;

  href?: Maybe<string>;

  images?: Maybe<(Maybe<Image>)[]>;

  type?: Maybe<string>;

  uri?: Maybe<string>;
}

export interface ExternalUrls {
  spotify?: Maybe<string>;
}

export interface Image {
  width: number;

  height: number;

  url: string;
}

export interface Playlist {
  id?: Maybe<string>;

  collaborative: boolean;

  description?: Maybe<string>;

  name: string;

  href: string;

  images: Image[];

  externalUrls: ExternalUrls;

  public: boolean;

  snapshotId: string;

  uri: string;

  type: string;
}

export interface Song {
  id: string;

  name: string;

  previewUrl?: Maybe<string>;

  album: Album;

  artists: Artist[];

  uri: string;
}

export interface Album {
  id: string;

  name: string;

  uri: string;

  images: Image[];
}

export interface Artist {
  id?: Maybe<string>;

  href?: Maybe<string>;

  name?: Maybe<string>;

  type?: Maybe<string>;

  uri?: Maybe<string>;
}

export interface Mutation {
  createPlaylistWithSongs?: Maybe<CreatePlaylistWithSongsPayload>;
}

export interface CreatePlaylistWithSongsPayload {
  playlist: Playlist;
}

// ====================================================
// Arguments
// ====================================================

export interface PlaylistQueryArgs {
  playlistId: string;
}
export interface RecommendationsQueryArgs {
  seedTracks?: Maybe<(Maybe<string>)[]>;
}
export interface CreatePlaylistWithSongsMutationArgs {
  userId: string;

  playlistName: string;

  uris: (Maybe<string>)[];
}

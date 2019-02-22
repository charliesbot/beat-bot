import { SpotifyClient } from "./client";

type Entity = "tracks" | "artists";
type Seeds = {
  seedTracks: string[];
};

export const SpotifySDK = (token: string) => {
  const client = SpotifyClient(token);
  return {
    getUser: async () => {
      return await client.get("me");
    },
    getPlaylist: async playlistId => {
      const playlist = await client.get(`playlists/${playlistId}`);
      return playlist.data;
    },
    getTopTracks: async (entity: Entity) => {
      const songs = await client.get(
        `me/top/${entity}?limit=50&time_range=short_term`
      );
      return songs.data.items;
    },
    getRecommendationsBasedOnSeeds: async ({ seedTracks }: Seeds) => {
      const seedTracksQuery = `seed_tracks=${seedTracks.join()}`;
      const songs = await client.get(`recommendations?${seedTracksQuery}`);
      return songs.data.tracks;
    },
    createPlaylist: async (userId: string, playlistName: string) => {
      const body = {
        name: playlistName,
        description: "🎧",
        public: false
      };
      const playlist = await client.post(`users/${userId}/playlists`, body);
      return playlist.data;
    },
    addTracksToPlaylist: async (playlistId: string, uris: string[]) => {
      const body = {
        uris,
        position: 0
      };
      const snapshot = await client.post(
        `playlists/${playlistId}/tracks`,
        body
      );
      return snapshot.data;
    }
  };
};

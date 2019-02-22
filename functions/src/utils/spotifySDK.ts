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
    getTopTracks: async (entity: Entity) => {
      const songs = await client.get(
        `me/top/${entity}?limit=50&time_range=short_term`
      );
      return songs.data.items;
    },
    getRecommendationsBasedOnSeeds: async ({ seedTracks }: Seeds) => {
      const seedTracksQuery = `seed_tracks=${seedTracks.join()}`;
      return await client.get(`recommendations?${seedTracksQuery}`);
    },
    createPlaylist: async (userId: string, playlistName: string) => {
      // const body = {
      // name: playlistName,
      // description: "🎧",
      // public: false
      // };
      // return fetchSpotifyAPI({
      // api: `users/${userId}/playlists`,
      // body,
      // method: "POST"
      // });
    },
    addTracksToPlaylist: async (playlistId: string, uris: string[]) => {
      // const body = {
      // uris,
      // position: 0
      // };
      // return fetchSpotifyAPI({
      // api: `playlists/${playlistId}/tracks`,
      // body,
      // method: "POST"
      // });
    }
  };
};

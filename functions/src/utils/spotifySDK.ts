import axios, { AxiosRequestConfig } from "axios";

type Entity = "tracks" | "artists";
type Seeds = {
  seedTracks: string[];
};
type FetchSpotify = {
  api: string;
  method?: "GET" | "POST";
  body?: any;
};

const apiBase = "https://api.spotify.com/v1";

const fetchSpotifyAPI = ({ api, method = "GET", body }: FetchSpotify) => {
  const options: AxiosRequestConfig = {
    method,
    headers: {
      Authorization: `Bearer BQDjciY5C0UJAk96AmGW-hqP8_Rm-Wt-1D3L5ARChl_gBqPqYhCUj4fglJPXz79gYLwzHQHWV-BMhVegr-tkoed7pvADRKlA0DIdfX8k0d3CZR2KskUeP04hvkoiGypmWBq7FMY1Hd7l1WcTrK0Sg_HIXzMPS_XYPao63K898kkLpoxLGsNwl0Y`,
      "Content-Type": "application/json"
    }
  };

  if (body) {
    options.data = JSON.stringify(body);
  }

  return axios(`${apiBase}/${api}`, options);
};

export const SpotifySDK = {
  setToken: (token: string) => {
    return new Promise(resolve => {
      sessionStorage.setItem("token", token);
      resolve();
    });
  },
  getUser: async () => {
    return await fetchSpotifyAPI({ api: "me" });
  },
  getTopTracks: async (entity: Entity) => {
    const songs = await fetchSpotifyAPI({
      api: `me/top/${entity}?limit=50&time_range=short_term`
    });
    return songs.data.items;
  },
  getRecommendationsBasedOnSeeds: async ({ seedTracks }: Seeds) => {
    const seedTracksQuery = `seed_tracks=${seedTracks.join()}`;
    return fetchSpotifyAPI({
      api: `recommendations?${seedTracksQuery}`
    });
  },
  createPlaylist: async (userId: string, playlistName: string) => {
    const body = {
      name: playlistName,
      description: "🎧",
      public: false
    };
    return fetchSpotifyAPI({
      api: `users/${userId}/playlists`,
      body,
      method: "POST"
    });
  },
  addTracksToPlaylist: async (playlistId: string, uris: string[]) => {
    const body = {
      uris,
      position: 0
    };
    return fetchSpotifyAPI({
      api: `playlists/${playlistId}/tracks`,
      body,
      method: "POST"
    });
  }
};

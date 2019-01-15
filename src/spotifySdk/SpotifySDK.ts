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
  const token = window.sessionStorage.getItem("token");
  const options: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(`${apiBase}/${api}`, options);
};

const SpotifySDK = {
  setToken: (token: string) => {
    return new Promise(resolve => {
      sessionStorage.setItem("token", token);
      resolve();
    });
  },
  getUser: async () => {
    const response = await fetchSpotifyAPI({ api: "me" });
    return await response.json();
  },
  getTopTracks: async (entity: Entity) => {
    const response = await fetchSpotifyAPI({
      api: `me/top/${entity}?limit=50`
    });
    return await response.json();
  },
  getRecommendationsBasedOnSeeds: async ({ seedTracks }: Seeds) => {
    const seedTracksQuery = `seed_tracks=${seedTracks.join()}`;
    const response = await fetchSpotifyAPI({
      api: `recommendations?${seedTracksQuery}`
    });
    return await response.json();
  },
  createPlaylist: async (userId: string) => {
    const body = {
      name: "Playlist made by Mozika",
      description: "🎧",
      public: false
    };
    const response = await fetchSpotifyAPI({
      api: `users/${userId}/playlists`,
      body,
      method: "POST"
    });
    return await response.json();
  },
  addTracksToPlaylist: async (playlistId: string, uris: string[]) => {
    const body = {
      uris,
      position: 0
    };
    const response = await fetchSpotifyAPI({
      api: `playlists/${playlistId}/tracks`,
      body,
      method: "POST"
    });
    debugger;
    return await response.json();
  }
};

export default SpotifySDK;

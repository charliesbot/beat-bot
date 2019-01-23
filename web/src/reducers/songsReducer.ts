import { GET_TOP_TRACKS } from "../actions/topTracksActions";
import { GET_RECOMMENDATION_SEED } from "../actions/recommendationSeedActions";
import property from "lodash/fp/property";

const SONG_PATHS = {
  [GET_TOP_TRACKS.completed.TYPE]: "items",
  [GET_RECOMMENDATION_SEED.completed.TYPE]: "tracks"
};

const songsNormalizer = (songs: any) => {
  const hash = songs.reduce((acum: any, item: any) => {
    item.artist = item.artists.map((artist: any) => artist.name).join(", ");
    acum[item.id] = item;
    return acum;
  }, {});
  return hash;
};

const songsReducer = (state: any = {}, { type, payload }: any) => {
  switch (type) {
    case GET_TOP_TRACKS.completed.TYPE:
    case GET_RECOMMENDATION_SEED.completed.TYPE: {
      const songsPayload = property(SONG_PATHS[type])(payload.songs);

      const hash = songsNormalizer(songsPayload);
      return {
        ...state,
        ...hash
      };
    }
    default:
      return state;
  }
};

export default songsReducer;

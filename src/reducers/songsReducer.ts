import { GET_TOP_TRACKS } from "../actions/topTracksActions";

const songsReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case GET_TOP_TRACKS.completed.TYPE: {
      const hash = action.payload.songs.items.reduce((acum: any, item: any) => {
        item.artist = item.artists.map((artist: any) => artist.name).join(", ");
        acum[item.id] = item;
        return acum;
      }, {});
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

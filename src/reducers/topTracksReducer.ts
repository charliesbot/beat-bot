import { GET_TOP_TRACKS } from "../actions/topTracksActions";

const topTracksReducer = (state = [], action: any) => {
  switch (action.type) {
    case GET_TOP_TRACKS.completed.TYPE: {
      return action.payload.songs.items.map((item: any) => item.id);
    }
    default:
      return state;
  }
};

export default topTracksReducer;

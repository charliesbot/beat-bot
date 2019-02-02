import { GET_RECOMMENDATION_SEED } from "../actions/recommendationSeedActions";
import property from "lodash/fp/property";

const initialState = {
  songs: [],
  isLoading: false
};

const recommendationSeedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_RECOMMENDATION_SEED.started.TYPE: {
      return {
        songs: [],
        isLoading: true
      };
    }

    case GET_RECOMMENDATION_SEED.completed.TYPE: {
      return {
        songs: action.payload.songs.tracks.map(property("id")),
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default recommendationSeedReducer;

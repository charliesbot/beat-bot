import { GET_RECOMMENDATION_SEED } from "../actions/recommendationSeedActions";
import property from "lodash/fp/property";

const recommendationSeedReducer = (state = [], action: any) => {
  switch (action.type) {
    case GET_RECOMMENDATION_SEED.completed.TYPE: {
      return action.payload.songs.tracks.map(property("id"));
    }
    default:
      return state;
  }
};

export default recommendationSeedReducer;

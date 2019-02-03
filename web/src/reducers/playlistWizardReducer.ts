import property from "lodash/fp/property";
import { hide } from "redux-modal";
import { NEXT_STEP, SET_PLAYLIST_DATA } from "../actions/playlistWizardActions";
import { GET_RECOMMENDATION_SEED } from "../actions/recommendationSeedActions";
import { CREATE_PLAYLIST } from "../actions/createPlaylistAction";

const initialState = {
  songs: [],
  isLoading: false,
  step: 1,
  title: "",
  description: "",
  playlist: null
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case hide("createPlaylistWizard").type: {
      return initialState;
    }

    case GET_RECOMMENDATION_SEED.started.TYPE: {
      return {
        ...state,
        songs: [],
        isLoading: true
      };
    }

    case GET_RECOMMENDATION_SEED.completed.TYPE: {
      return {
        ...state,
        songs: action.payload.songs.tracks.map(property("id")),
        isLoading: false
      };
    }

    case NEXT_STEP.TYPE: {
      return {
        ...state,
        step: state.step + 1
      };
    }

    case SET_PLAYLIST_DATA.TYPE: {
      const field = action.payload;
      return {
        ...state,
        ...field
      };
    }

    case CREATE_PLAYLIST.started.TYPE: {
      return {
        ...state,
        isLoading: true
      };
    }

    case CREATE_PLAYLIST.completed.TYPE: {
      return {
        ...state,
        isLoading: false,
        playlist: action.payload.playlist
      };
    }

    default:
      return state;
  }
};

export default user;

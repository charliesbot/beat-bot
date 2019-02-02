import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as modal } from "redux-modal";
import { History } from "history";
import songs from "./songsReducer";
import topTracks from "./topTracksReducer";
import user from "./userReducer";
import recommendationSeed from "./recommendationSeedReducer";
import playlistWizard from "./playlistWizardReducer";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    songs,
    user,
    topTracks,
    recommendationSeed,
    playlistWizard,
    modal
  });

export default rootReducer;

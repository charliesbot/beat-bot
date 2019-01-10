import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import songs from "./songsReducer";
import topTracks from "./topTracksReducer";
import user from "./userReducer";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    songs,
    user,
    topTracks
  });

export default rootReducer;

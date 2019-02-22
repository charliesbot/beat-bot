import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as modal } from "redux-modal";
import { History } from "history";
import user from "./userReducer";
import playlistWizard from "./playlistWizardReducer";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user,
    playlistWizard,
    modal
  });

export default rootReducer;

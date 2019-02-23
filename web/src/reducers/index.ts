import { combineReducers } from "redux";
import { reducer as modal } from "redux-modal";
import playlistWizard from "./playlistWizardReducer";

const rootReducer = combineReducers({
  playlistWizard,
  modal
});

export default rootReducer;

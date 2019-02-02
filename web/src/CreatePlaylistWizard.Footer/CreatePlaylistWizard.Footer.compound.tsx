import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { NEXT_STEP } from "../actions/playlistWizardActions";
import CreatePlaylistWizardFooter from "./CreatePlaylistWizard.Footer";

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    nextStep: NEXT_STEP
  };

  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePlaylistWizardFooter);

import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { connectModal } from "redux-modal";
import { NEXT_STEP } from "../../actions/playlistWizardActions";
import CreatePlaylistWizard from "./CreatePlaylistWizard";

const mapStateToProps = (state: any) => {
  const { playlistWizard } = state;
  return {
    step: playlistWizard.step
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    nextStep: NEXT_STEP
  };

  return bindActionCreators(dispatchActions, dispatch);
};

const ConnectedModal = connectModal({ name: "createPlaylistWizard" })(
  CreatePlaylistWizard
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedModal);

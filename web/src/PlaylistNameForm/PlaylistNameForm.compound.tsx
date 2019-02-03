import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { SET_PLAYLIST_DATA } from "../actions/playlistWizardActions";
import PlaylistNameForm from "./PlaylistNameForm";

const mapStateToProps = (state: any) => {
  const { playlistWizard } = state;
  return {
    title: playlistWizard.title,
    description: playlistWizard.description
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    onChange: SET_PLAYLIST_DATA
  };

  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistNameForm);

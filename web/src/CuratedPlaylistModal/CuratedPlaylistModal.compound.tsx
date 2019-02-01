import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { connectModal } from "redux-modal";
import { GET_RECOMMENDATION_SEED } from "../actions/recommendationSeedActions";
import { CREATE_PLAYLIST } from "../actions/createPlaylistAction";
import CuratedPlaylistModal from "./CuratedPlaylistModal";

const mapStateToProps = (state: any) => {
  const { songs, recommendationSeed } = state;
  return {
    curatedSongs: recommendationSeed.map((songId: string) => songs[songId])
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    requestGetRecommendations: GET_RECOMMENDATION_SEED.request,
    createPlaylist: CREATE_PLAYLIST.request
  };
  return bindActionCreators(dispatchActions, dispatch);
};

const ConnectedModal = connectModal({ name: "curatedPlaylist" })(
  CuratedPlaylistModal
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedModal);

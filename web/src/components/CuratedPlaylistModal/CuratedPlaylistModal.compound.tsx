import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { GET_RECOMMENDATION_SEED } from "../../actions/recommendationSeedActions";
import { CREATE_PLAYLIST } from "../../actions/createPlaylistAction";
import CuratedPlaylistModal from "./CuratedPlaylistModal";

const mapStateToProps = (state: any) => {
  const { songs, playlistWizard } = state;
  return {
    curatedSongs: playlistWizard.songs.map((songId: string) => songs[songId]),
    isLoading: playlistWizard.isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    requestGetRecommendations: GET_RECOMMENDATION_SEED.request,
    createPlaylist: CREATE_PLAYLIST.request
  };

  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CuratedPlaylistModal);

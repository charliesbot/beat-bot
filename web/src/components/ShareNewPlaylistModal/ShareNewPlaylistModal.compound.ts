import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { CREATE_PLAYLIST } from "../../actions/createPlaylistAction";
import ShareNewPlaylistModal from "./ShareNewPlaylistModal";

const mapStateToProps = (state: any) => {
  const { songs, playlistWizard } = state;
  return {
    curatedSongs: playlistWizard.songs.map((songId: string) => songs[songId]),
    isLoading: playlistWizard.isLoading,
    playlist: playlistWizard.playlist
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    createPlaylist: CREATE_PLAYLIST.request
  };

  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareNewPlaylistModal);

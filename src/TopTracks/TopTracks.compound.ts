import { GET_TOP_TRACKS } from "../actions/topTracksActions";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import TopTracks from "./TopTracks";

const mapStateToProps = (state: any) => {
  const { songs, topTracks } = state;
  return {
    topTracks: [...topTracks].map((trackId: string) => songs[trackId])
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    requestTopTracks: GET_TOP_TRACKS.request
  };
  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracks);

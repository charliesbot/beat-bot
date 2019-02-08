import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { show } from "redux-modal";
import { GET_TOP_TRACKS } from "../../actions/topTracksActions";
import { GET_RECOMMENDATION_SEED } from "../../actions/recommendationSeedActions";
import { GET_USER } from "../../actions/auth";
import TopTracks from "./TopTracks";

const mapStateToProps = (state: any) => {
  const { songs, topTracks } = state;
  return {
    topTracks: topTracks.map((trackId: string) => songs[trackId]),
    songs
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    requestGetUser: GET_USER.request,
    requestTopTracks: GET_TOP_TRACKS.request,
    requestGetRecommendations: GET_RECOMMENDATION_SEED.request,
    openModal: show
  };
  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracks);

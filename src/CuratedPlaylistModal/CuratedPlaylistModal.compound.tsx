import { GET_RECOMMENDATION_SEED } from "../actions/recommendationSeedActions";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import CuratedPlaylistModal from "./CuratedPlaylistModal";

const mapStateToProps = (state: any) => {
  const { songs, recommendationSeed } = state;
  return {
    curatedSongs: recommendationSeed.map((songId: string) => songs[songId])
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    requestGetRecommendations: GET_RECOMMENDATION_SEED.request
  };
  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CuratedPlaylistModal);

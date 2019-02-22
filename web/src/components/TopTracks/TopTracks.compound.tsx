import React from "react";
import { useQuery } from "react-apollo-hooks";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { show } from "redux-modal";
import { GET_TOP_TRACKS } from "./TopTracks.query";
import { GET_USER } from "../../actions/auth";
import TopTracks from "./TopTracks";

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    requestGetUser: GET_USER.request,
    openModal: show
  };
  return bindActionCreators(dispatchActions, dispatch);
};

const TopTracksCompound: React.FC<any> = props => {
  const { data, loading } = useQuery(GET_TOP_TRACKS);

  if (loading) {
    return null;
  }

  return <TopTracks {...props} topTracks={data.topTracks} />;
};

export default connect(
  null,
  mapDispatchToProps
)(TopTracksCompound);

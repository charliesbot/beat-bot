import React from "react";
import { useQuery } from "react-apollo-hooks";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { show } from "redux-modal";
import { GET_TOP_TRACKS_AND_USER } from "./TopTracks.query";
import TopTracks from "./TopTracks";
import { Redirect } from "react-router";

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    openModal: show
  };
  return bindActionCreators(dispatchActions, dispatch);
};

const TopTracksCompound: React.FC<any> = props => {
  const { data, loading, error } = useQuery(GET_TOP_TRACKS_AND_USER);

  if (loading) {
    return null;
  }

  if (error) {
    return <Redirect to="/login" />;
  }

  return <TopTracks {...props} topTracks={data.topTracks} />;
};

export default connect(
  null,
  mapDispatchToProps
)(TopTracksCompound);

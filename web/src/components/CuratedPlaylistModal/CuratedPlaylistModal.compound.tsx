import React from "react";
import { useQuery } from "react-apollo-hooks";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { CREATE_PLAYLIST } from "../../actions/createPlaylistAction";
import CuratedPlaylistModal from "./CuratedPlaylistModal";
import { GET_RECOMMENDATIONS } from "./CuratedPlaylistModal.query";

const mapDispatchToProps = (dispatch: Dispatch) => {
  const dispatchActions = {
    saveSongs: CREATE_PLAYLIST.completed
  };

  return bindActionCreators(dispatchActions, dispatch);
};

const CuratedPlaylistModalCompound: React.FC<any> = props => {
  const { message, saveSongs } = props;
  const seedTracks = Array.from(message.seedSongs);
  const { data, loading } = useQuery(GET_RECOMMENDATIONS, {
    variables: {
      seedTracks
    }
  });

  return (
    <CuratedPlaylistModal
      {...props}
      saveSongs={saveSongs}
      topTracks={data.topTracks}
      isLoading={loading}
      curatedSongs={data.recommendations}
    />
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CuratedPlaylistModalCompound);

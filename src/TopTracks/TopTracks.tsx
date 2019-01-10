import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View } from "./TopTracks.styled";
import Song from "../Song";

const TopTracks = (props: any) => {
  const { topTracks } = props;

  useEffect(() => {
    props.requestTopTracks();
  }, []);

  return (
    <View>
      {topTracks.map((song: any) => (
        <Song song={song} key={song.id} />
      ))}
    </View>
  );
};

const mapStateToProps = function(state: any) {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(TopTracks);

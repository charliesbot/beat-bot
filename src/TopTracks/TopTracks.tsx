import React from "react";
import { connect } from "react-redux";
import { View } from "./TopTracks.styled";
import Song from "../Song";

const TopTracks = (props: any) => {
  console.log("test test ", props);
  const { songs } = props;
  return (
    <View>
      {Object.values(songs).map((song: any) => (
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

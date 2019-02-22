import React, { useState, useEffect } from "react";
import { useMutation } from "react-apollo-hooks";
import { connect } from "react-redux";
import ShareNewPlaylistModal from "./ShareNewPlaylistModal";
import { CREATE_PLAYLIST } from "./ShareNewPlaylistModal.query";

const mapStateToProps = (state: any) => {
  const { playlistWizard, user } = state;
  const { playlist, title } = playlistWizard;
  return {
    userId: user.id,
    playlistName: title,
    uris: playlist.map((track: any) => track.uri)
  };
};

const ShareNewPlaylistModalCompound: React.FC<any> = props => {
  const { userId, playlistName, uris, handleHide } = props;
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const createPlaylist = useMutation(CREATE_PLAYLIST, {
    variables: { userId, playlistName, uris }
  });

  useEffect(() => {
    createPlaylist()
      .then(({ data }) => {
        setPlaylist(data.createPlaylistWithSongs.playlist);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ShareNewPlaylistModal
      isLoading={loading}
      playlist={playlist}
      handleHide={handleHide}
    />
  );
};

export default connect(mapStateToProps)(ShareNewPlaylistModalCompound);

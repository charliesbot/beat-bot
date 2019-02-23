import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { connect } from "react-redux";
import ShareNewPlaylistModal from "./ShareNewPlaylistModal";
import { GET_USER, CREATE_PLAYLIST } from "./ShareNewPlaylistModal.query";

const mapStateToProps = (state: any) => {
  const { playlistWizard } = state;
  const { playlist, title } = playlistWizard;
  return {
    playlistName: title,
    uris: playlist.map((track: any) => track.uri)
  };
};

const ShareNewPlaylistModalCompound: React.FC<any> = props => {
  const { playlistName, uris, handleHide } = props;
  const [isLoading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const { data, loading: getUserLoading } = useQuery(GET_USER);
  const createPlaylist = useMutation(CREATE_PLAYLIST);

  useEffect(() => {
    const mutationVariables = {
      variables: { userId: "", playlistName, uris }
    };

    if (!data.user) {
      return;
    }

    mutationVariables.variables.userId = data.user.id;

    createPlaylist(mutationVariables)
      .then(({ data }) => {
        setPlaylist(data.createPlaylistWithSongs.playlist);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [getUserLoading]);

  return (
    <ShareNewPlaylistModal
      isLoading={isLoading}
      playlist={playlist}
      handleHide={handleHide}
    />
  );
};

export default connect(mapStateToProps)(ShareNewPlaylistModalCompound);

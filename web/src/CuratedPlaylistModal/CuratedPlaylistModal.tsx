import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import SongRow from "../SongRow";
import Dialog from "../Dialog";
import { Footer, Body, CloseButton } from "./CuratedPlaylistModal.styled";

const CuratedPlaylistModal = (props: any) => {
  const {
    handleHide,
    message,
    requestGetRecommendations,
    curatedSongs,
    createPlaylist,
    show
  } = props;

  if (!show) {
    return null;
  }

  const savePlaylist = () => {
    const playlistName = prompt("Choose a name for this playlist");
    if (playlistName) {
      createPlaylist({ playlistName });
    }
  };

  useEffect(() => {
    requestGetRecommendations({ seedTracks: Array.from(message.seedSongs) });
  }, []);

  return (
    <Dialog isVisible={show} height={70}>
      <CloseButton onClick={handleHide}>
        <MdClose />
      </CloseButton>
      <Body>
        {curatedSongs.map((song: any) => (
          <SongRow song={song} key={song.id} />
        ))}
      </Body>
      <Footer onClick={savePlaylist}>Save Playlist to Spotify</Footer>
    </Dialog>
  );
};

export default CuratedPlaylistModal;

import React, { useEffect } from "react";
import SongRow from "../SongRow";
import { Body, Container } from "./CuratedPlaylistModal.styled";
import Loader from "../Loader";

const CuratedPlaylistModal = (props: any) => {
  const {
    message,
    requestGetRecommendations,
    curatedSongs,
    createPlaylist,
    isLoading
  } = props;

  useEffect(() => {
    requestGetRecommendations({ seedTracks: Array.from(message.seedSongs) });
  }, []);

  return (
    <Container>
      <Body>
        {isLoading && <Loader size={50} />}
        {curatedSongs.map((song: any) => (
          <SongRow song={song} key={song.id} />
        ))}
      </Body>
    </Container>
  );
};

export default CuratedPlaylistModal;

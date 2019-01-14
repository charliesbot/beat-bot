import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import SongRow from "../SongRow";
import { Overlay, Container, CloseButton } from "./CuratedPlaylistModal.styled";

const CuratedPlaylistModal = (props: any) => {
  const {
    onCloseModal,
    seedSongs,
    requestGetRecommendations,
    curatedSongs
  } = props;

  useEffect(() => {
    requestGetRecommendations({ seedTracks: Array.from(seedSongs) });
  }, []);

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <CloseButton onClick={onCloseModal}>
          <MdClose />
        </CloseButton>
        {curatedSongs.map((song: any) => (
          <SongRow song={song} key={song.id} />
        ))}
      </Container>
    </Overlay>,
    document.body
  );
};

export default CuratedPlaylistModal;

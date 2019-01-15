import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import SongRow from "../SongRow";
import {
  Footer,
  Body,
  Overlay,
  Container,
  CloseButton
} from "./CuratedPlaylistModal.styled";

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
        <Body>
          {curatedSongs.map((song: any) => (
            <SongRow song={song} key={song.id} />
          ))}
        </Body>
        <Footer>Create Playlist</Footer>
      </Container>
    </Overlay>,
    document.body
  );
};

export default CuratedPlaylistModal;

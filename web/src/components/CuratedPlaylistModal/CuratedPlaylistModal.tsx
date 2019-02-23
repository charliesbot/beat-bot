import React, { useEffect } from "react";
import SongRow from "../SongRow";
import { Body, Container } from "./CuratedPlaylistModal.styled";
import WizardFooter from "../CreatePlaylistWizard.Footer";
import Loader from "../Loader";

const CuratedPlaylistModal = (props: any) => {
  const { curatedSongs = [], isLoading, saveSongs } = props;
  useEffect(
    () => {
      saveSongs({ playlist: curatedSongs });
    },
    [curatedSongs]
  );

  return (
    <Container>
      {isLoading && <Loader size={50} />}
      <Body>
        {curatedSongs.map((song: any) => (
          <SongRow song={song} key={song.id} />
        ))}
      </Body>
      <WizardFooter />
    </Container>
  );
};

export default CuratedPlaylistModal;

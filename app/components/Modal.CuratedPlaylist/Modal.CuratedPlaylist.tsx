import React, { useEffect } from "react";
import { Song } from "../../interfaces/types";
import SongRow from "../SongRow";
import { Body, Container } from "./Modal.CuratedPlaylist.styled";
import { CreatePlaylistWizardFooter } from "../CreatePlaylistWizard/CreatePlaylistWizard";

interface Props {
  curatedSongs: Song[];
  isLoading: boolean;
  saveSongs: any;
}

const CuratedPlaylistModal: React.FC<Props> = props => {
  const { curatedSongs = [], saveSongs } = props;
  useEffect(() => {
    saveSongs({ playlist: curatedSongs });
  }, [curatedSongs]);

  return (
    <Container>
      <Body>
        {curatedSongs.map(song => (
          <SongRow song={song} key={song.id} />
        ))}
      </Body>
      <CreatePlaylistWizardFooter />
    </Container>
  );
};

export default CuratedPlaylistModal;

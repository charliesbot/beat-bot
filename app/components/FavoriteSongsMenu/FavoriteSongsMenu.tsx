import React, { useState } from "react";
import { MdClose, MdLibraryMusic } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import {
  EmptyPlaceholder,
  SeedCounter,
  Container,
  RemoveButton,
  RecommendationsButton,
  Body,
} from "./FavoriteSongsMenu.styled";
import { Song } from "../../interfaces/types";
import useModal from "../../hooks/useModal";
import SongRow from "../SongRow";

type Props = {
  seedSongs: Set<string>;
  songs: Song[];
  onRemoveSong: (id: string) => void;
};

function notUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

const EmptyQueue = () => {
  return (
    <EmptyPlaceholder>
      <MdLibraryMusic size={100} />
      <h4>Like up to 5 songs and I'll create a new playlist just for you</h4>
    </EmptyPlaceholder>
  );
};

const SeedersMenu: React.FC<Props> = props => {
  const { songs, seedSongs, onRemoveSong } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [openCreatePlaylistWizard] = useModal("CREATE_PLAYLIST_WIZARD");

  const fullSelectedSongs = Array.from(seedSongs)
    .map(song => songs.find(s => s.id === song))
    .filter(notUndefined);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const isEmpty = !fullSelectedSongs.length;

  return (
    <Container>
      {isOpen && (
        <>
          <Body>
            {isEmpty && <EmptyQueue />}
            {fullSelectedSongs.map(song => {
              return (
                <SongRow
                  height={96}
                  key={song.id}
                  song={song}
                  right={
                    <RemoveButton onClick={() => onRemoveSong(song.id)}>
                      <MdClose />
                    </RemoveButton>
                  }
                />
              );
            })}
          </Body>
          <RecommendationsButton
            disabled={isEmpty}
            onClick={() => openCreatePlaylistWizard({ songs: seedSongs })}
          >
            Find recommendations!
          </RecommendationsButton>
        </>
      )}
      <SeedCounter onClick={toggleIsOpen}>
        <FaRobot size={25} />
      </SeedCounter>
    </Container>
  );
};

export default SeedersMenu;

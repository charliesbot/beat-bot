import React, { useState } from "react";
import { MdClose, MdLibraryMusic } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import SongRow from "../SongRow";
import {
  EmptyPlaceholder,
  SeedCounter,
  Container,
  RemoveButton,
  RecommendationsButton,
  Body,
} from "./FavoriteSongsMenu.styled";
import { Song as SongType } from "../../interfaces/types";

type Props = {
  seedSongs: Set<string>;
  songs: SongType[];
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
  const { songs, seedSongs } = props;
  const [isOpen, setIsOpen] = useState(false);

  const fullSelectedSongs = Array.from(seedSongs)
    .map(song => songs.find(s => s.id === song))
    .filter(notUndefined);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const isEmpty = !fullSelectedSongs.length;

  return (
    <Container>
      <SeedCounter onClick={toggleIsOpen}>
        <FaRobot size={25} />
      </SeedCounter>
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
                    <RemoveButton>
                      <MdClose />
                    </RemoveButton>
                  }
                />
              );
            })}
          </Body>
          <RecommendationsButton disabled={isEmpty}>
            Find recommendations!
          </RecommendationsButton>
        </>
      )}
    </Container>
  );
};

export default SeedersMenu;

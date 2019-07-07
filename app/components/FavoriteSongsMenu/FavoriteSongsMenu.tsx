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

type Props = {
  seedSongs: Set<string>;
  songs: any;
};

const EmptyQueue = () => {
  return (
    <EmptyPlaceholder>
      <MdLibraryMusic size={100} />
      <h4>Add up to 5 songs and mix them all!</h4>
    </EmptyPlaceholder>
  );
};

const SeedersMenu: React.FC<Props> = props => {
  const { songs, seedSongs } = props;
  const [isOpen, setIsOpen] = useState(true);

  const fullSelectedSongs = Array.from(seedSongs).map(song =>
    songs.find((s: any) => s.id === song),
  );

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const isEmpty = !fullSelectedSongs.length;

  return (
    <Container>
      <SeedCounter onClick={toggleIsOpen}>
        <FaRobot />
      </SeedCounter>
      {isOpen && (
        <>
          <Body>
            {isEmpty && <EmptyQueue />}
            {fullSelectedSongs.map((song: any) => {
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

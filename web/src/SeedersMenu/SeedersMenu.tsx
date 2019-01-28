import React, { useState } from "react";
import { MdClose, MdLibraryMusic } from "react-icons/md";
import SongRow from "../SongRow";
import {
  EmptyPlaceholder,
  ArrowIcon,
  SeedCounter,
  Container,
  RemoveButton,
  RecommendationsButton,
  Body
} from "./SeedersMenu.styled";

type Props = {
  seedSongs: Set<string>;
  songs: any;
  onRemoveSong: (id: string) => void;
  onOpenModal: () => void;
};

const EmptyQueue = () => {
  return (
    <EmptyPlaceholder>
      <MdLibraryMusic size={100} />
      <h4>Add up to 5 songs and mix them all!</h4>
    </EmptyPlaceholder>
  );
};

const SeedersMenu = (props: Props) => {
  const { songs, seedSongs, onRemoveSong, onOpenModal } = props;
  const [isOpen, setIsOpen] = useState(true);

  const fullSelectedSongs = Array.from(seedSongs).map(id => songs[id]);
  const removeSong = (id: string) => () => onRemoveSong(id);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const isEmpty = !fullSelectedSongs.length;

  return (
    <Container>
      <SeedCounter onClick={toggleIsOpen}>
        <h3>Your taste makers</h3>
        <ArrowIcon isOpen={isOpen} size={20} />
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
                    <RemoveButton onClick={removeSong(song.id)}>
                      <MdClose />
                    </RemoveButton>
                  }
                />
              );
            })}
          </Body>
          <RecommendationsButton onClick={onOpenModal} disabled={isEmpty}>
            Find recommendations!
          </RecommendationsButton>
        </>
      )}
    </Container>
  );
};

export default SeedersMenu;

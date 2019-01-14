import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import SongRow from "../SongRow";
import {
  Container,
  RemoveButton,
  RecommendationsButton,
  Dropdown,
  SeedCounter
} from "./SeedersMenu.styled";

type Props = {
  seedSongs: Set<string>;
  songs: any;
  onRemoveSong: (id: string) => void;
  onOpenModal: () => void;
};

const SeedersMenu = (props: Props) => {
  const { songs, seedSongs, onRemoveSong, onOpenModal } = props;
  const [isOpen, setIsOpen] = useState(false);

  const fullSelectedSongs = Array.from(seedSongs).map(id => songs[id]);
  const removeSong = (id: string) => () => onRemoveSong(id);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Container>
      <SeedCounter onClick={toggleIsOpen}>
        {fullSelectedSongs.length} song(s)
      </SeedCounter>
      {isOpen && (
        <Dropdown>
          {fullSelectedSongs.map(song => {
            return (
              <SongRow
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
          <RecommendationsButton onClick={onOpenModal}>
            Find recommendations
          </RecommendationsButton>
        </Dropdown>
      )}
    </Container>
  );
};

export default SeedersMenu;

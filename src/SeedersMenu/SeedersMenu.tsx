import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import {
  AlbumArt,
  Container,
  RemoveButton,
  RecommendationsButton,
  Dropdown,
  Row,
  SeedCounter,
  Details
} from "./SeedersMenu.styled";

type Props = {
  seedSongs: Set<string>;
  songs: any;
  onRemoveSong: (id: string) => void;
};

const SeedersMenu = (props: Props) => {
  const { songs, seedSongs, onRemoveSong } = props;
  const [isOpen, setIsOpen] = useState(true);

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
              <Row key={song.id}>
                <AlbumArt src={song.album.images[2].url} />
                <Details>
                  <strong>{song.name}</strong>
                  <span>{song.artist}</span>
                </Details>
                <RemoveButton onClick={removeSong(song.id)}>
                  <MdClose />
                </RemoveButton>
              </Row>
            );
          })}
          <RecommendationsButton>Find recommendations</RecommendationsButton>
        </Dropdown>
      )}
    </Container>
  );
};

export default SeedersMenu;

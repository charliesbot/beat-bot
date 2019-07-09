import React from "react";
import { Container, Label, Info } from "./Song.styled";

export const SIZES = {
  SMALL: 150,
  BIG: 200,
};

const Song: React.FC<any> = props => {
  const { song, size, positionX, positionY } = props;
  const { album } = song;
  const coverArt = album.images[1].url;

  return (
    <Container
      positionY={positionY}
      positionX={positionX}
      coverArt={coverArt}
      height={size}
      width={size}
      className="song"
    >
      <Label>
        <Info>
          <strong className="songTitle">{song.name}</strong>
          <span className="songArtist">{song.artists[0].name}</span>
        </Info>
      </Label>
    </Container>
  );
};

export default React.memo(Song);

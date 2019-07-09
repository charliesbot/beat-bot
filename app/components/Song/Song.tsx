import React from "react";
import { Container, Label, Info } from "./Song.styled";
import MediaTracker from "../../utils/mediaTracker";
import { Song as SongType } from "../../interfaces/types";

export const SIZES = {
  SMALL: 150,
  BIG: 200,
};

type Props = {
  song: SongType;
  size: number;
  positionX: number;
  positionY: number;
};

const Song: React.FC<Props> = props => {
  const { song, size, positionX, positionY } = props;
  const { album, previewUrl } = song;
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
        {previewUrl && (
          <button onClick={() => MediaTracker().playSong(previewUrl)}>
            play
          </button>
        )}
        <Info>
          <strong className="songTitle">{song.name}</strong>
          <span className="songArtist">{song.artists[0].name}</span>
        </Info>
      </Label>
    </Container>
  );
};

export default React.memo(Song);

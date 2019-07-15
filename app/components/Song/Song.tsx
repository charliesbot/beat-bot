import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { Container, Label, Info, PlayButton } from "./Song.styled";
import mediaTracker from "../../utils/mediaTracker";
import { Song as SongType } from "../../interfaces/types";

export const SIZES = {
  SMALL: 150,
  BIG: 200,
};

type Props = {
  song: SongType;
  size: number;
};

const Song: React.FC<Props> = props => {
  const { song, size } = props;
  const { album, previewUrl } = song;
  const coverArt = album.images[1].url;

  return (
    <Container coverArt={coverArt} height={size} width={size} className="song">
      <Label>
        {previewUrl && (
          <PlayButton onClick={() => mediaTracker.playSong(previewUrl)}>
            <MdPlayCircleOutline
              color="white"
              size="1.5rem"
              onClick={() => mediaTracker.playSong(previewUrl)}
            />
          </PlayButton>
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

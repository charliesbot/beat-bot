import React from "react";
import {
  TiHeartOutline,
  TiHeartFullOutline,
  TiMediaPlayOutline,
} from "react-icons/ti";
import { Container, Overlay, Info, ActionButton, Actions } from "./Song.styled";
import mediaTracker from "../../utils/mediaTracker";
import { Song as SongType } from "../../interfaces/types";

const OUTLINE_COLOR = "rgb(136, 153, 166)";

export const SIZES = {
  SMALL: 150,
  BIG: 200,
};

interface Props {
  isSelected: boolean;
  song: SongType;
  size: number;
  onAddSong: (songId: string) => void;
  onRemoveSong: (songId: string) => void;
}

const Song: React.FC<Props> = props => {
  const { song, size, onAddSong, onRemoveSong, isSelected } = props;
  const { album, previewUrl } = song;
  const coverArt = album.images[1].url;

  return (
    <Container coverArt={coverArt} height={size} width={size} className="song">
      <Overlay>
        <Info>
          <strong className="songTitle">{song.name}</strong>
          <span className="songArtist">{song.artists[0].name}</span>
        </Info>
        <Actions>
          {previewUrl && (
            <ActionButton onClick={() => mediaTracker.playSong(previewUrl)}>
              <TiMediaPlayOutline size="1.5rem" color={OUTLINE_COLOR} />
            </ActionButton>
          )}
          {!isSelected && (
            <ActionButton onClick={() => onAddSong(song.id)}>
              <TiHeartOutline size="1.5rem" color={OUTLINE_COLOR} />
            </ActionButton>
          )}
          {isSelected && (
            <ActionButton onClick={() => onRemoveSong(song.id)}>
              <TiHeartFullOutline size="1.5rem" color="red" />
            </ActionButton>
          )}
        </Actions>
      </Overlay>
    </Container>
  );
};

export default React.memo(Song);

import React, { useRef } from "react";
import { Container, Label, Info, Toggle } from "./Song.styled";
import { offset, distanceBetweenPoints } from "../utils/layout";
import { Point } from "../@types/Point.type";

type Props = {
  song: any;
  origin: Point;
  onToggleSong: (songId: string) => void;
  scrollPosition: object;
  size: number;
  added: boolean;
};

const MAX_SCALE = 2;

const Song = (props: Props) => {
  const ref = useRef(null);
  const { song, origin, onToggleSong, size, added } = props;
  const onClick = () => onToggleSong(song.id);
  const { album } = song;

  const coverPoints = offset(ref.current);
  const calculatedDistance = distanceBetweenPoints(origin, coverPoints);

  const delta = MAX_SCALE - calculatedDistance / (size * 1.65);

  const limitedDelta = delta >= 1 ? delta : 1;

  const zIndex = Math.ceil(limitedDelta * 100);

  const coverArt = album.images[1].url;

  const style = {
    transform: `scale(${limitedDelta}) translateZ(${zIndex}px)`,
    width: size,
    height: size,
    backgroundImage: `url('${coverArt}')`,
    backgroundSize: "cover"
  };

  return (
    <Container ref={ref} style={style}>
      {limitedDelta > 1.5 && (
        <Label>
          <Info>
            <strong className="songTitle">{song.name}</strong>
            <span className="songArtist">{song.artist}</span>
          </Info>
          <Toggle onClick={onClick} added={added}>
            {added ? "Remove" : "Add"}
          </Toggle>
        </Label>
      )}
    </Container>
  );
};

export default Song;

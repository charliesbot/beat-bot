import React, { useRef } from "react";
import { Container, Label, Info, Toggle } from "./Song.styled";
import { offset, distanceBetweenPoints, getPosition } from "../utils/layout";
import { Point } from "../@types/Point.type";

type Props = {
  song: any;
  origin: Point;
  onToggleSong: (songId: string) => void;
  scrollPosition: object;
  size: number;
  added: boolean;
  index: number;
};

const MAX_SCALE = 2;

const Song = (props: Props) => {
  const ref = useRef(null);
  const { song, origin, onToggleSong, size, added, index } = props;
  const onClick = () => onToggleSong(song.id);
  const { album } = song;

  const coverPoints = offset(ref.current);
  const calculatedDistance = distanceBetweenPoints(origin, coverPoints);

  const delta = MAX_SCALE - calculatedDistance / (size * 1.65);

  const limitedDelta = delta >= 1 ? delta : 1;

  const zIndex = Math.ceil(limitedDelta * 100);

  const coverArt = album.images[1].url;

<<<<<<< HEAD:web/src/Song/Song.tsx
  const style = {
    transform: `scale(${limitedDelta}) translateZ(${zIndex}px)`,
=======
  const { positionX, positionY } = getPosition(index);

  const style: any = {
    transform: `scale(${limitedDelta}) translateX(${positionX}px) translateY(${positionY}px)`,
    zIndex,
>>>>>>> virtualization:src/Song/Song.tsx
    width: size,
    height: size,
    backgroundImage: `url('${coverArt}')`,
    backgroundSize: "cover",
    position: "absolute"
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

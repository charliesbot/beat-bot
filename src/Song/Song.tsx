import React, { useRef } from "react";
import { Art, Container } from "./Song.styled";
import { offset, distanceBetweenPoints } from "../utils/layout";
import { Song as SongType } from "../@types/Song.type";
import { Point } from "../@types/Point.type";

type Props = {
  song: SongType;
  origin: Point;
  onToggleSong: (songId: string) => void;
  scrollPosition: object;
};

const SIZE = 200;
const MAX_SCALE = 2;

const Song = (props: Props) => {
  const ref: any = useRef(null);
  const { song, origin, onToggleSong } = props;
  const onClick = () => onToggleSong(song.id);
  const { album } = song;

  const coverPoints = offset(ref.current);
  const calculatedDistance = distanceBetweenPoints(origin, coverPoints);

  const delta = MAX_SCALE - calculatedDistance / (SIZE * 1.65);

  const limitedDelta = delta >= 1 ? delta : 1;

  const zIndex = Math.ceil(limitedDelta * 100);

  const coverArt = album.images[1].url;

  const style = {
    transform: `scale(${limitedDelta}) translateZ(${limitedDelta}px)`,
    zIndex
  };

  return (
    <Container ref={ref} style={style} onClick={onClick} size={SIZE}>
      <Art coverArt={coverArt} />
    </Container>
  );
};

export default Song;

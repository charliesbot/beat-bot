import React, { useRef } from "react";
import { Art, Container } from "./Song.styled";

const SIZE = 200;
const MAX_SCALE = 2;

type Point = {
  x: number;
  y: number;
};

const offset = (el: HTMLElement) => {
  if (!el) {
    return;
  }
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset;
  const scrollTop = window.pageYOffset;
  return {
    x: rect.left + scrollLeft + rect.width / 2,
    y: rect.top + scrollTop + rect.height / 2
  };
};

const distanceBetweenPoints = (point1?: Point, point2?: Point) => {
  if (!point1 || !point2) {
    return 0;
  }

  const x = Math.pow(point1.x - point2.x, 2);
  const y = Math.pow(point1.y - point2.y, 2);
  return Math.sqrt(x + y);
};

const Song = (props: any) => {
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

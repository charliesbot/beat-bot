import React, { useRef } from "react";
import { Container, Label, Info, Toggle } from "./Song.styled";
import { offset, distanceBetweenPoints, getPosition } from "../../utils/layout";
import { Point } from "../../@types/Point.type";
import { useIntersectionObserver } from "../../hooks";

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
  const { song, origin, onToggleSong, size, added, index } = props;
  const { album } = song;

  const ref: any = useRef(null);
  const onClick = () => onToggleSong(song.id);

  const coverPoints = offset(ref.current);

  // const isVisible = useIntersectionObserver(ref);
  const calculatedDistance = distanceBetweenPoints(origin, coverPoints);

  const delta = MAX_SCALE - calculatedDistance / (size * 1.65);

  const limitedDelta = delta >= 1 ? delta : 1;

  const zIndex = Math.ceil(limitedDelta * 100);

  const coverArt = album.images[1].url;

  const { positionX, positionY } = getPosition(index, size);

  const style: any = {
    transform: `translate3d(${positionX}px, ${positionY}px, ${zIndex}px) scale3d(${limitedDelta}, ${limitedDelta}, ${limitedDelta})`,
    width: size,
    height: size,
    backgroundImage: `url('${coverArt}')`
  };

  return (
    <Container ref={ref} style={style}>
      {limitedDelta > 1.5 && (
        <Label>
          <Info>
            <strong className="songTitle">{song.name}</strong>
            <span className="songArtist">{song.artists[0].name}</span>
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

import React, { useRef } from "react";
import styled from "@emotion/styled";
import { offset, distanceBetweenPoints, getPosition } from "../utils/layout";
import { Point } from "../interfaces";

type Props = {
  song: any;
  origin: Point;
  onToggleSong: (songId: string) => void;
  scrollPosition: object;
  size: number;
  added: boolean;
  index: number;
};

const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  transition: 100ms ease transform;
  background-size: cover;
  border-radius: 1rem;
  overflow: hidden;
  will-change: transform;
  border: none;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 70%;
  .songTitle,
  .songArtist {
  }
`;

const Toggle = styled.button`
  width: 30%;
  height: 20px;
  border-radius: 1rem;
  border: solid 1px;
  font-size: 2rem;
  line-height: 10px;
  cursor: pointer;
`;

const Label = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 10rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2rem;
  font-size: 3rem;
  span {
    margin-top: 0.5rem;
    font-size: 2rem;
  }
`;

const MAX_SCALE = 2;

const Song: React.FC<Props> = props => {
  const { song, origin, onToggleSong, size, index } = props;
  const { album } = song;

  const ref = useRef(null);
  const onClick = () => onToggleSong(song.id);

  const coverPoints = offset(ref.current);

  const calculatedDistance = distanceBetweenPoints(origin, coverPoints);

  const delta = MAX_SCALE - calculatedDistance / (size * 1.65);

  const limitedDelta = delta >= 1 ? delta : 1;

  const zIndex = Math.ceil(limitedDelta * 100);

  const coverArt = album.images[1].url;

  const { positionX, positionY } = getPosition(index, size);

  const style = {
    transform: `translate3d(${positionX}px, ${positionY}px, ${zIndex}px) scale3d(${limitedDelta}, ${limitedDelta}, ${limitedDelta})`,
    width: size,
    height: size,
    backgroundImage: `url('${coverArt}')`,
  };

  return (
    <Container ref={ref} style={style}>
      {limitedDelta > 1.5 && (
        <Label>
          <Info>
            <strong className="songTitle">{song.name}</strong>
            <span className="songArtist">{song.artists[0].name}</span>
          </Info>
          <Toggle onClick={onClick}>Add</Toggle>
        </Label>
      )}
    </Container>
  );
};

export default Song;

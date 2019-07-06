import React, { useRef } from "react";
import styled from "@emotion/styled";
import { offset, distanceBetweenPoints, getPosition } from "../utils/layout";

const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  transition: 100ms ease transform;
  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  will-change: transform;
  border: none;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
`;

const MAX_SCALE = 2;

const Song: React.FC<any> = props => {
  const { song, origin, size, index } = props;
  const { album } = song;

  const ref = useRef(null);

  const coverPoints = offset(ref.current);

  const calculatedDistance = distanceBetweenPoints(origin, coverPoints);

  const delta = MAX_SCALE - calculatedDistance / (size * 1.65);

  const limitedDelta = Math.max(delta, 1);

  const zIndex = Math.ceil(limitedDelta * 100);

  const coverArt = album.images[1].url;

  const { positionX, positionY } = getPosition(index, size);

  const style = {
    transform: `translate3d(${positionX}px, ${positionY}px, ${zIndex}px) scale3d(${limitedDelta}, ${limitedDelta}, ${limitedDelta})`,
    width: size,
    height: size,
    backgroundImage: `url('${coverArt}')`,
  };

  return <Container ref={ref} style={style} className="song"></Container>;
};

export default Song;

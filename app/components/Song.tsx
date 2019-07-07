import React from "react";
import styled from "@emotion/styled";

export const SIZES = {
  SMALL: 150,
  BIG: 200,
};

const Container = styled.div<any>`
  display: flex;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: absolute;
  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  will-change: transform;
  border: none;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
  background-image: url('${({ coverArt }) => coverArt}');
  transform: ${({ positionX, positionY }) =>
    `translate3d(${positionX}px, ${positionY}px, 1px) scale3d(1, 1, 1)`};
`;

const Song: React.FC<any> = props => {
  const { song, size, positionX, positionY } = props;
  const { album } = song;
  const coverArt = album.images[1].url;

  return (
    <Container
      positionY={positionY}
      positionX={positionX}
      coverArt={coverArt}
      height={size}
      width={size}
      className="song"
    ></Container>
  );
};

export default React.memo(Song);

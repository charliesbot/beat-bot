import styled from "@emotion/styled";

type ContainerProps = {
  width: number;
  height: number;
  coverArt: string;
  positionX: number;
  positionY: number;
};

export const Container = styled.div<ContainerProps>`
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

export const PlayButton = styled.button`
  box-shadow: none;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  svg {
    pointer-events: none;
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 70%;
  .songTitle,
  .songArtist {
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Label = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem;
  font-size: 0.75rem;
  span {
    margin-top: 0.125rem;
    font-size: 0.5rem;
  }
`;

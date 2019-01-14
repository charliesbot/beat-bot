import styled from "styled-components";

type ArtProps = {
  coverArt: string;
};

export const Container = styled.div`
  display: flex;
  width: 50rem;
  height: 50rem;
  transition: 100ms linear transform;
  border-radius: 1.5rem;
  overflow: hidden;
  will-change: transform;
`;

export const Art = styled.div`
  width: 100%;
  height: 50rem;
  background-size: cover;
  background-image: url('${({ coverArt }: ArtProps) => coverArt}');
`;

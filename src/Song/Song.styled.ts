import styled from "styled-components";

type ArtProps = {
  coverArt: string;
};

export const Container = styled.div`
  display: flex;
  width: 50rem;
`;

export const Art = styled.div`
  width: 100%;
  height: 50rem;
  border-radius: 2rem;
  background-size: cover;
  background-image: url('${({ coverArt }: ArtProps) => coverArt}');
`;

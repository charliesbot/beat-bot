import styled from "styled-components";
import property from "lodash/fp/property";

type ArtProps = {
  coverArt: string;
};

export const Container = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  transition: 100ms ease transform;
  border-radius: 1.5rem;
  overflow: hidden;
  will-change: transform;
`;

export const Art = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('${({ coverArt }: ArtProps) => coverArt}');
`;

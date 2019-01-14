import styled from "styled-components";
import property from "lodash/fp/property";

type ArtProps = {
  coverArt: string;
};

export const Container = styled.div<{ size: number }>`
  display: flex;
  width: ${property("size")}px;
  height: ${property("size")}px;
  transition: 100ms linear transform;
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

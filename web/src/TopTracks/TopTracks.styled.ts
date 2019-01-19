import styled from "styled-components";
<<<<<<< HEAD:web/src/TopTracks/TopTracks.styled.ts
import { SIZES } from "../constants/size";
import { mediaQuery } from "../utils/style";
=======
>>>>>>> virtualization:src/TopTracks/TopTracks.styled.ts

export const Wrapper = styled.div`
  width: 50rem;
  height: 50rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25rem;
  margin-top: -25rem;
`;

export const Content = styled.div`
  position: relative;
  width: 1200px;
  height: 2000px;
  color: white;
  transform-style: preserve-3d;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  ${mediaQuery.mobile`
    width: 800px;
<<<<<<< HEAD:web/src/TopTracks/TopTracks.styled.ts
    grid-template-columns: repeat(auto-fill, ${SIZES.SMALL}px);
    `};
=======
  }
>>>>>>> virtualization:src/TopTracks/TopTracks.styled.ts
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 10000;
  top: 0;
  left: 0;
`;

export const Container = styled.div``;

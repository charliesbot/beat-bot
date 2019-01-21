import styled from "styled-components";
import prop from "lodash/fp/prop";

export const AlbumArt = styled.img`
  width: 20rem;
  border-radius: 1.5rem;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.2);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 4rem;
  span {
    margin-top: 1rem;
    font-size: 3rem;
  }
`;

export const Row = styled.li<{ height?: number }>`
  display: flex;
  padding: 2rem;
  list-style: none;
  align-items: center;
  color: inherit;
  height: ${prop("height")}px;
  ${AlbumArt} + ${Details} {
    margin-left: 4rem;
  }
`;

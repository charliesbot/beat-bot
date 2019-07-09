import styled from "@emotion/styled";
import prop from "lodash/fp/prop";

export const AlbumArt = styled.img`
  width: 5rem;
  border-radius: 0.3rem;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.2);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  span {
    margin-top: 0.25rem;
    font-size: 0.75rem;
  }
`;

export const Row = styled.li<{ height?: number }>`
  display: flex;
  padding: 0.5rem;
  list-style: none;
  align-items: center;
  color: inherit;
  height: ${prop("height")}px;
  ${AlbumArt} + ${Details} {
    margin-left: 1rem;
  }
`;

import styled, { css } from "styled-components";
import { ellipsis } from "polished";
import { mediaQuery } from "../utils/style";

export const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  transition: 100ms ease transform;
  background-size: cover;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  will-change: transform;
  border: none;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 70%;
  .songTitle,
  .songArtist {
    ${ellipsis("90%")};
  }
`;

const InvertStyle = ({ added }: { added: boolean }) => {
  if (added) {
    return css`
      color: black;
      background-color: white;

      &:hover {
        background-color: transparent;
        color: white;
      }
    `;
  }

  return css`
    color: white;
    background-color: transparent;

    &:hover {
      background-color: white;
      color: black;
    }
  `;
};

export const Toggle = styled.button`
  width: 30%;
  height: 20px;
  border-radius: 1rem;
  border: solid 1px;
  font-size: 2rem;
  line-height: 10px;
  cursor: pointer;
  ${InvertStyle};
`;

export const Label = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 10rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2rem;
  font-size: 3rem;
  span {
    margin-top: 0.5rem;
    font-size: 2rem;
  }
  ${mediaQuery.mobile`
    height: 100%;
    top: 0;
    flex-direction: column;
    width: 100%;
    ${Toggle} {
      height: 8rem;
    }
    ${Toggle}, ${Info} {
      width: 100%;
    }
  `};
`;

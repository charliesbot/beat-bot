import styled, { css } from "styled-components";
import { darken } from "polished";
import { MdKeyboardArrowDown } from "react-icons/md";
import { mediaQuery } from "../utils/style";

const arrowAnimation = ({ isOpen }: { isOpen: boolean }) => {
  if (isOpen) {
    return css`
      transform: rotate(180deg);
    `;
  }
  return css`
    transform: rotate(0deg);
  `;
};

export const ArrowIcon = styled(MdKeyboardArrowDown)`
  position: absolute;
  right: 5rem;
  transition: ease transform 200ms;
  ${arrowAnimation};
`;

export const EmptyPlaceholder = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #022f4e;
`;

export const SeedCounter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: white;
  box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.2);
}
`;

export const AlbumArt = styled.img`
  width: 10rem;
  min-width: 10rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    font-size: 3rem;
  }
`;

export const Row = styled.li`
  display: flex;
  padding: 2rem;
  list-style: none;
  align-items: center;
  ${AlbumArt} + ${Details} {
    margin-left: 2rem;
  }
`;

export const Body = styled.ul`
  color: black;
  overflow: hidden;
  background: white;
  margin: 0;
  padding: 3rem;
`;

export const BaseButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: none;
  --webkit-appearance: none;
  background-color: transparent;
  border: none;
`;

export const RemoveButton = styled(BaseButton)`
  margin-left: auto;
  &:hover {
    color: red;
  }
`;

export const RecommendationsButton = styled(BaseButton)`
  --recommendation-color: #0e0e6f;
  width: 100%;
  height: 13rem;
  background-color: var(--recommendation-color);
  font-weight: bold;
  color: white;
  transition: ease all 200ms;
  &:hover:not(:disabled) {
    background-color: ${darken(0.1, "#0e0e6f")};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: black;
  position: fixed;
  overflow: hidden;
  margin: 3rem;
  width: 100rem;
  z-index: 1000;
  transform: translateZ(1000px);
  color: white;
  border-radius: 1.5rem;
  ${mediaQuery.tablet`
    padding: 0;
    margin: 0;
    width: 100%;
    ${SeedCounter} {
      width: 80%;
      margin: 4rem auto;
      padding: 1.5rem;
      border-radius: 1.5rem;
    }
    ${Body} {
      width: 100%;
    }
  `};
`;

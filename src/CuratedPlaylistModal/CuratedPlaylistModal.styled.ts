import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  margin-left: auto;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  color: gray;
  border: solid 1px;
  &:hover {
    color: white;
    background-color: gray;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 110rem;
  max-height: 50vh;
  padding: 4rem;
  border-radius: 4px;
  background-color: white;
  overflow: auto;
  @media (max-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

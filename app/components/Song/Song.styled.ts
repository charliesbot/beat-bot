import styled from "@emotion/styled";

interface ContainerProps {
  width: number;
  height: number;
  coverArt: string;
}

export const ActionButton = styled.button`
  flex: 1;
  box-shadow: none;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  svg {
    pointer-events: none;
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 100%;
`;

export const Overlay = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: 100ms ease opacity;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem;
  font-size: 0.75rem;
  span {
    margin-top: 0.125rem;
    font-size: 0.5rem;
  }
`;

export const Actions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  will-change: transform;
  border: none;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
  background-image: url('${({ coverArt }) => coverArt}');
  &.show-overlay {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

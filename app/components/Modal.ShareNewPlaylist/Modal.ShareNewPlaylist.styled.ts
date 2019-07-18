import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: solid 2px rgba(0,0,0,0.3);
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}
`;

export const CopyRow = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const RoundedButton: any = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  color: white;
  background-color: #1db954;
  border-radius: 6px;
  transition: all ease 200ms;
  border: none;
  &:hover {
    background-color: #1ed760;
  }
`;

export const CopyButton = styled(RoundedButton)`
  --primary-color: #1db954;
  border-radius: 6px;
  border: solid 2px var(--primary-color);
  color: var(--primary-color);
  background-color: transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  &:hover {
    color: white;
  }
`;

export const SkipButton = styled.a`
  cursor: pointer;
  color: #1db954;
  font-size: 0.9em;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem 2.5rem;
  overflow: auto;
  ${CopyRow} {
    margin: 1rem 0;
  }

  ${Input} {
    flex: 1;
  }

  .open-playlist-button {
    margin: 1.5em;
  }
`;

import React from "react";
import { useClipboard } from "use-clipboard-copy";
import {
  Input,
  RoundedButton,
  Container,
  CopyRow,
  CopyButton,
  SkipButton,
} from "./Modal.ShareNewPlaylist.styled";

const CuratedPlaylistModal: React.FC<any> = props => {
  const { playlist, isLoading, handleHide } = props;
  const clipboard = useClipboard({
    onSuccess: () => alert("Copied to clipboard!"),
  });

  if (isLoading || !playlist) {
    return <Container></Container>;
  }

  const link = playlist.externalUrls.spotify;

  return (
    <>
      <Container>
        <h1>{`Your playlist ${playlist.name} is ready!`}</h1>
        <CopyRow>
          <Input value={link} readOnly ref={clipboard.target} />
          <CopyButton>Copy Link</CopyButton>
        </CopyRow>
        <RoundedButton
          as="a"
          target="_blank"
          className="open-playlist-button"
          href={link}
        >
          Open Playlist
        </RoundedButton>
        <SkipButton onClick={handleHide}>Close and continue</SkipButton>
      </Container>
    </>
  );
};

export default CuratedPlaylistModal;

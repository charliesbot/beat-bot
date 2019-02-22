import React from "react";
import ReactClipboard from "react-clipboardjs-copy";
import {
  Input,
  RoundedButton,
  Container,
  CopyRow,
  CopyButton,
  SkipButton
} from "./ShareNewPlaylistModal.styled";
import Loader from "../Loader";

const CuratedPlaylistModal = (props: any) => {
  const { playlist, isLoading, handleHide } = props;

  if (isLoading || !playlist) {
    return (
      <Container>
        <Loader size={50} />
      </Container>
    );
  }

  const link = playlist.externalUrls.spotify;

  return (
    <>
      <Container>
        <h1>{`Your playlist ${playlist.name} is ready!`}</h1>
        <CopyRow>
          <Input value={link} readOnly />
          <ReactClipboard
            text={link}
            onSuccess={() => alert("Copied to clipboard!")}
          >
            <CopyButton>Copy Link</CopyButton>
          </ReactClipboard>
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

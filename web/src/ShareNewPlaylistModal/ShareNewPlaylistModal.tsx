import React from "react";
import Dialog from "../Dialog";
import {
  Header,
  CopyRow,
  Footer,
  PlaylistLink,
  CloseButton,
  OpenButton
} from "./ShareNewPlaylistModal.styled";

const CuratedPlaylistModal = (props: any) => {
  const { handleHide, message, show } = props;

  // const { playlist } = message;
  const playlist = {
    external_urls: {
      spotify: "https://dribbble.com/shots/3425305-Share-Private-Link"
    }
  };

  const link = playlist.external_urls.spotify;

  return (
    <Dialog isVisible={false}>
      <Header>Your playlist is ready!</Header>
      <CopyRow>
        <PlaylistLink href={link} target="_blank">
          {link}
        </PlaylistLink>
      </CopyRow>
      <Footer>
        <CloseButton>Close</CloseButton>
        <OpenButton as="a">Open Playlist</OpenButton>
      </Footer>
    </Dialog>
  );
};

export default CuratedPlaylistModal;

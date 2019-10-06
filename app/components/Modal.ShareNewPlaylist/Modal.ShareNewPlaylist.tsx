import React, { useEffect, useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
  Input,
  RoundedButton,
  Container,
  CopyRow,
  CopyButton,
  SkipButton,
} from "./Modal.ShareNewPlaylist.styled";
import { GET_USER, CREATE_PLAYLIST } from "./Modal.ShareNewPlaylist.query";
import Loader from "../Loader";

const CuratedPlaylistModal: React.FC<any> = props => {
  const { newPlaylistData, closeModal } = props;

  const [isLoading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState<any>(null);
  const { data, loading: getUserLoading } = useQuery(GET_USER);
  const createPlaylist = useMutation(CREATE_PLAYLIST);

  useEffect(() => {
    if (!getUserLoading) {
      createPlaylist({
        variables: { ...newPlaylistData, userId: data.user.id },
      })
        .then(({ data }) => {
          // @ts-ignore
          setPlaylist(data.createPlaylistWithSongs.playlist);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => setLoading(false));
    }
  }, [getUserLoading]);

  const clipboard = useClipboard({
    onSuccess: () => alert("Copied to clipboard!"),
  });

  if (isLoading || !playlist) {
    return (
      <Container>
        <Loader size={50} />
      </Container>
    );
  }

  const link = playlist.externalUrls.spotify;
  const handleCopy = () => clipboard.copy(link);

  return (
    <>
      <Container>
        <h1>{`Your playlist ${playlist.name} is ready!`}</h1>
        <CopyRow>
          <Input value={link} readOnly />
          <CopyButton onClick={handleCopy}>Copy Link</CopyButton>
        </CopyRow>
        <RoundedButton
          as="a"
          target="_blank"
          className="open-playlist-button"
          href={link}
        >
          Open Playlist
        </RoundedButton>
        <SkipButton onClick={closeModal}>Close and continue</SkipButton>
      </Container>
    </>
  );
};

export default CuratedPlaylistModal;

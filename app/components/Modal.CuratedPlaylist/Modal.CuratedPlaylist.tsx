import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { Song, Query } from "../../interfaces/types";
import SongRow from "../SongRow";
import { Body, Container } from "./Modal.CuratedPlaylist.styled";
import { GET_RECOMMENDATIONS } from "./Modal.CuratedPlaylist.query";
import Loader from "../Loader";

interface Props {
  songs: Set<Song>;
  setNewPlaylistSongs: any;
}

type Data = Pick<Query, "recommendations">;

const CuratedPlaylistModal: React.FC<Props> = props => {
  const { songs, setNewPlaylistSongs } = props;
  const { data, loading } = useQuery<Data>(GET_RECOMMENDATIONS, {
    variables: {
      seedTracks: Array.from(songs),
    },
  });

  useEffect(() => {
    if (data && data.recommendations) {
      const uris = data.recommendations.map(song => song.uri);
      setNewPlaylistSongs([...uris]);
    }
  }, [data]);

  if (loading || !data) {
    return (
      <Container>
        <Loader size={50} />
      </Container>
    );
  }

  return (
    <Container>
      <Body>
        {data.recommendations.map(song => (
          <SongRow song={song} key={song.id} />
        ))}
      </Body>
    </Container>
  );
};

export default CuratedPlaylistModal;

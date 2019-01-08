import React from "react";
import { Art, Container } from "./Song.styled";

const Song = (props: any) => {
  console.log(props);
  const { song } = props;
  const { album } = song;
  const coverArt = album.images[1].url;
  return (
    <Container>
      <Art coverArt={coverArt} />
    </Container>
  );
};

export default Song;

import React from "react";
import { Row, AlbumArt, Details } from "./SongRow.styled";

type Props = {
  song: any;
  right: any;
  height: number;
};

const SongRow: React.FC<Props> = ({ song, right, height }) => {
  return (
    <Row key={song.id} height={height}>
      <AlbumArt src={song.album.images[2].url} />
      <Details>
        <strong>{song.name}</strong>
        <span>{song.artists[0].name}</span>
      </Details>
      {right}
    </Row>
  );
};

export default SongRow;

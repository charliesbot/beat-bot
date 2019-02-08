import React from "react";
import { Row, AlbumArt, Details } from "./SongRow.styled";
import MediaTracker from "../../spotifySdk/MediaTracker";

const SongRow = ({ song, right, height }: any) => {
  return (
    <Row key={song.id} height={height}>
      <AlbumArt
        src={song.album.images[2].url}
        onClick={() => MediaTracker.playSong(song.preview_url)}
      />
      <Details>
        <strong>{song.name}</strong>
        <span>{song.artist}</span>
      </Details>
      {right}
    </Row>
  );
};

export default SongRow;

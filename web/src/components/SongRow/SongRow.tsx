import React from "react";
import { Row, AlbumArt, Details } from "./SongRow.styled";
import MediaTracker from "../../spotifySdk/MediaTracker";

const SongRow = ({ song, right, height }: any) => {
  return (
    <Row key={song.id} height={height}>
      <AlbumArt
        src={song.album.images[2].url}
        onClick={() => MediaTracker.playSong(song.previewUrl)}
      />
      <Details>
        <strong>{song.name}</strong>
        <span>{song.artists[0].name}</span>
      </Details>
      {right}
    </Row>
  );
};

export default SongRow;

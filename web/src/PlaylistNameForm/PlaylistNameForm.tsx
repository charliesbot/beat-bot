import React, { useState } from "react";
import { Container, Input, Description } from "./PlaylistNameForm.styled";

const PlaylistNameForm = () => {
  const [playlistName, setPlaylistName] = useState("");
  const onChange = (evt: any) => setPlaylistName(evt.target.value);

  return (
    <Container>
      <Input
        required
        value={playlistName}
        onChange={onChange}
        placeholder="The best playlist eveeeeeer"
      />
      <Description placeholder="Add a nice description" />
    </Container>
  );
};

export default PlaylistNameForm;

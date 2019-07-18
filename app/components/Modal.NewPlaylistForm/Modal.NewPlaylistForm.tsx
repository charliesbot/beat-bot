import React from "react";
import { Container, Input, Description } from "./Modal.NewPlaylistForm.styled";

const ModalNewPlaylistForm: React.FC<any> = props => {
  const { onChangeInput } = props;

  return (
    <Container>
      <Input
        required
        value={props.playlistName}
        onChange={onChangeInput("playlistName")}
        placeholder="Eg. Best title ever"
      />
      <Description placeholder="Eg. These songs are great!" />
    </Container>
  );
};

export default ModalNewPlaylistForm;


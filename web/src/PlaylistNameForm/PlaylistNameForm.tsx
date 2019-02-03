import React from "react";
import { Container, Input, Description } from "./PlaylistNameForm.styled";
import WizardFooter from "../CreatePlaylistWizard.Footer";

const PlaylistNameForm = (props: any) => {
  const onChangeInput = (field: string) => (evt: any) =>
    props.onChange({ [field]: evt.target.value });

  return (
    <Container>
      <Input
        required
        value={props.title}
        onChange={onChangeInput("title")}
        placeholder="Eg. Best title ever"
      />
      <Description placeholder="Eg. These songs are great!" />
      <WizardFooter />
    </Container>
  );
};

export default PlaylistNameForm;

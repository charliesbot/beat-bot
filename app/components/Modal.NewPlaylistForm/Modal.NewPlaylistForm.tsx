import React from "react";
import { Container, Input, Description } from "./Modal.NewPlaylistForm.styled";
import { CreatePlaylistWizardFooter } from "../CreatePlaylistWizard/CreatePlaylistWizard";

const ModalNewPlaylistForm: React.FC<any> = props => {
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
      <CreatePlaylistWizardFooter />
    </Container>
  );
};

export default ModalNewPlaylistForm;


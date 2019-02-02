import React from "react";
import { MdMusicNote, MdEdit, MdSend } from "react-icons/md";
import Dialog from "../Dialog";
import Stepper from "../Stepper";
import CuratedPlaylist from "../CuratedPlaylistModal";
import WizardFooter from "../CreatePlaylistWizard.Footer";
import PlaylistNameForm from "../PlaylistNameForm";
import { Header, Title } from "./CreatePlaylist.styled";

const steps = [
  {
    title: "Preview your songs",
    children: <MdMusicNote />
  },
  { title: "Choose a name", children: <MdEdit /> },
  {
    title: "Rock your new playlist!",
    children: <MdSend />
  }
];

const renderStep = ({ step, ...props }: any) => {
  switch (step) {
    case 0: {
      return <CuratedPlaylist {...props} />;
    }
    case 1: {
      return <PlaylistNameForm {...props} />;
    }
  }
};

const CreatePlaylistWizard = (props: any) => {
  console.log(props);
  return (
    <Dialog isVisible={props.show}>
      <Header>
        <Title>{steps[props.step].title}</Title>
        <Stepper activeStep={props.step + 1} steps={steps} />
      </Header>
      {renderStep(props)}
      <WizardFooter />
    </Dialog>
  );
};

export default CreatePlaylistWizard;

import React from "react";
import { MdMusicNote, MdEdit, MdSend, MdClose } from "react-icons/md";
import Dialog from "../Dialog";
import Stepper from "../Stepper";
import CuratedPlaylist from "../CuratedPlaylistModal";
import PlaylistNameForm from "../PlaylistNameForm";
import ShareNewPlaylistModal from "../ShareNewPlaylistModal";
import { Header, Title, CloseButton } from "./CreatePlaylist.styled";

const steps = [
  {
    title: "Preview your songs",
    children: <MdMusicNote />
  },
  { title: "Choose a name for your playlist", children: <MdEdit /> },
  {
    title: "Rock your new playlist!",
    children: <MdSend />
  }
];

const renderStep = ({ step, ...props }: any) => {
  switch (step) {
    case 1: {
      return <CuratedPlaylist {...props} />;
    }
    case 2: {
      return <PlaylistNameForm {...props} />;
    }
    default: {
      return <ShareNewPlaylistModal {...props} />;
    }
  }
};

const CreatePlaylistWizard = (props: any) => {
  return (
    <Dialog isVisible={props.show}>
      <CloseButton onClick={props.handleHide}>
        <MdClose />
      </CloseButton>
      <Header>
        <Title>{steps[props.step - 1].title}</Title>
        <Stepper activeStep={props.step} steps={steps} />
      </Header>
      {renderStep(props)}
    </Dialog>
  );
};

export default CreatePlaylistWizard;

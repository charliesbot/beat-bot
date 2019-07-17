import React from "react";
import { MdMusicNote, MdEdit, MdSend, MdClose } from "react-icons/md";
import Dialog from "../Dialog";
import Stepper from "../Stepper";
import CuratedPlaylist from "../Modal.CuratedPlaylist";
import PlaylistNameForm from "../Modal.NewPlaylistForm";
import ShareNewPlaylistModal from "../Modal.ShareNewPlaylist";
import {
  Header,
  Title,
  CloseButton,
  Footer,
  NextStep,
} from "./CreatePlaylistWizard.styled";

const steps = [
  {
    title: "Preview your songs",
    children: <MdMusicNote />,
  },
  { title: "Choose a name for your playlist", children: <MdEdit /> },
  {
    title: "Rock your new playlist!",
    children: <MdSend />,
  },
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

export const CreatePlaylistWizardFooter: React.FC<any> = ({ nextStep }) => {
  return (
    <Footer>
      <NextStep onClick={nextStep}>Next</NextStep>
    </Footer>
  );
};

const CreatePlaylistWizard: React.FC<any> = props => {
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

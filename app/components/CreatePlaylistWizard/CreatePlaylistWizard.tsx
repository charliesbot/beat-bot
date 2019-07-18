import React, { useState } from "react";
import { MdMusicNote, MdEdit, MdSend, MdClose } from "react-icons/md";
import {
  Header,
  Title,
  CloseButton,
  Footer,
  NextStep,
} from "./CreatePlaylistWizard.styled";
import Stepper from "../Stepper";
import CuratedPlaylist from "../Modal.CuratedPlaylist";
import PlaylistNameForm from "../Modal.NewPlaylistForm";
import ShareNewPlaylistModal from "../Modal.ShareNewPlaylist";

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
    case 0: {
      return <CuratedPlaylist {...props} />;
    }
    case 1: {
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
  const [step, setStep] = useState(0);
  const [newPlaylistData, setNewPlaylistData] = useState({
    userId: "",
    playlistName: "",
    uris: [""],
  });

  const setNewPlaylistSongs = (songUris: string[]) => {
    setNewPlaylistData({ ...newPlaylistData, uris: songUris });
  };

  const onChangeInput = (field: string) => (evt: any) =>
    setNewPlaylistData({ ...newPlaylistData, [field]: evt.target.value });

  return (
    <>
      <CloseButton onClick={props.closeModal}>
        <MdClose />
      </CloseButton>
      <Header>
        <Title>{steps[step].title}</Title>
        <Stepper activeStep={step} steps={steps} />
      </Header>
      {renderStep({
        ...props,
        step,
        newPlaylistData,
        onChangeInput,
        setNewPlaylistSongs,
      })}
      {step < steps.length - 1 && (
        <CreatePlaylistWizardFooter nextStep={() => setStep(step + 1)} />
      )}
    </>
  );
};

export default CreatePlaylistWizard;

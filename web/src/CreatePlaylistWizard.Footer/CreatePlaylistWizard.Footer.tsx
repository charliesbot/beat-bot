import React from "react";
import { Footer, NextStep } from "./CreatePlaylistWizard.Footer.styled";

const CreatePlaylistWizardFooter = ({ nextStep }: any) => {
  return (
    <Footer>
      <NextStep onClick={nextStep}>Next</NextStep>
    </Footer>
  );
};

export default CreatePlaylistWizardFooter;

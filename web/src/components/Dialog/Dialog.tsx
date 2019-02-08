import React from "react";
import ReactDOM from "react-dom";
import { Overlay, Container } from "./Dialog.styled";

const Dialog = (props: any) => {
  const { isVisible, children } = props;

  if (!isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>{children}</Container>
    </Overlay>,
    document.body
  );
};

export default Dialog;

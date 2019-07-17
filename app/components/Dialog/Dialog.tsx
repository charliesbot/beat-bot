import React from "react";
import ReactDOM from "react-dom";
import { Overlay, Container } from "./Dialog.styled";

type Props = {
  isVisible: boolean;
};

const Dialog: React.FC<Props> = props => {
  const { isVisible, children } = props;

  if (!isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>{children}</Container>
    </Overlay>,
    document.body,
  );
};

export default Dialog;

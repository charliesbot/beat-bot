import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Overlay, Container } from "./Dialog.styled";
import { ModalContext } from "../Modal/Modal";
import { MODAL_TYPES } from "../../hooks/useModal";

const Dialog: React.FC = () => {
  const { isOpen, modalType, props, close } = useContext(ModalContext);
  if (!isOpen || !modalType) {
    return null;
  }

  const ChildComponent = MODAL_TYPES[modalType];
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <ChildComponent {...props} closeModal={close} />
      </Container>
    </Overlay>,
    document.body,
  );
};

export default Dialog;

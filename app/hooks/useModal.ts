import { useContext } from "react";
import { ModalContext, ModalProviderType } from "../components/Modal/Modal";
import CreatePlaylistWizard from "../components/CreatePlaylistWizard";

const MODAL_TYPES = {
  CREATE_PLAYLIST_WIZARD: CreatePlaylistWizard,
};

type MODALS = keyof typeof MODAL_TYPES;

type ModalTuple = [(_: unknown) => void, ModalProviderType["close"]];

const useModal = (modalType: MODALS): ModalTuple => {
  const { open, close } = useContext(ModalContext);

  return [open(modalType), close];
};

export default useModal;

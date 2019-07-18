import React, { useReducer, createContext } from "react";
import Dialog from "../Dialog";
import { MODALS } from "../../hooks/useModal";

interface State {
  isOpen: boolean;
  modalType?: MODALS;
  props: unknown;
}

interface OpenAction {
  type: "OPEN";
  payload: {
    modalType: MODALS;
    props: unknown;
  };
}

interface CloseAction {
  type: "CLOSE";
}

export type Action = OpenAction | CloseAction;

export interface ModalProviderType<ETypes = MODALS> extends State {
  close?: () => void;
  open: (type: ETypes) => (_: unknown) => void;
}

const initialState: Readonly<State> = {
  isOpen: false,
  props: {},
  modalType: undefined,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN": {
      const { modalType, props } = action.payload;
      return { ...state, isOpen: true, modalType, props };
    }
    case "CLOSE":
    default:
      return initialState;
  }
};

export const ModalContext = createContext<ModalProviderType>({
  isOpen: false,
  props: {},
  open: () => () => {},
});

const ModalProvider: React.FC = componentProps => {
  const { children } = componentProps;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isOpen, props, modalType } = state;
  const open = (innerElementType: MODALS) => (innerProps: unknown) => {
    dispatch({
      payload: { modalType: innerElementType, props: innerProps },
      type: "OPEN",
    });
  };

  const close = () => dispatch({ type: "CLOSE" });

  return (
    <ModalContext.Provider value={{ modalType, isOpen, props, open, close }}>
      {children}
      <Dialog />
    </ModalContext.Provider>
  );
};

export default ModalProvider;

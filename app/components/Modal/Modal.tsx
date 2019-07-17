import React, { useReducer, createContext } from "react";

interface OpenAction {
  type: "OPEN";
  payload: {
    elementType: string;
    props?: unknown;
  };
}

interface CloseAction {
  type: "CLOSE";
}

type Action = OpenAction | CloseAction;

interface State {
  isOpen: boolean;
  elementType?: string;
  props: unknown;
}

export interface ModalProviderType<ETypes = string> extends State {
  close?: () => void;
  open: (type: ETypes) => (_: unknown) => void;
}

const initialState: Readonly<State> = {
  isOpen: false,
  props: {},
  elementType: undefined,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN": {
      const { elementType, props } = action.payload;
      return { ...state, isOpen: true, elementType, props };
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
  const { isOpen, elementType, props } = state;
  const open = (innerElementType: string) => (innerProps: unknown) => {
    dispatch({
      payload: { elementType: innerElementType, props: innerProps },
      type: "OPEN",
    });
  };

  const close = () => dispatch({ type: "CLOSE" });

  return (
    <ModalContext.Provider value={{ elementType, isOpen, props, open, close }}>
      {isOpen && children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

import { NEXT_STEP } from "../actions/playlistWizardActions";

const initialState = {
  step: 0
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case NEXT_STEP.TYPE: {
      return {
        ...state,
        step: state.step + 1
      };
    }

    default:
      return state;
  }
};

export default user;

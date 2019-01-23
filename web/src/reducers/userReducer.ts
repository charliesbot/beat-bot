import { GET_USER } from "../actions/auth";
const user = (state = {}, action: any) => {
  switch (action.type) {
    case GET_USER.completed.TYPE: {
      return {
        ...state,
        ...action.payload.user
      };
    }
    default:
      return state;
  }
};

export default user;

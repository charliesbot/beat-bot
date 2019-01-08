import songsMock from "./songsMock";

const normalized = songsMock.items.reduce((acum: any, current) => {
  acum[current.id] = current;
  return acum;
}, {});

const songs = (state = normalized, action: any) => {
  switch (action) {
    case "GET_SONGS": {
      return {
        ...state,
        ...action.payload.songs
      };
    }
    default:
      return state;
  }
};

export default songs;

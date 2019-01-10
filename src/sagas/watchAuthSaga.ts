import { call, takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { GET_USER } from "../actions/auth";
import SpotifySDK from "../spotifySdk/SpotifySDK";

function* triggerLoginSaga({ payload }: any) {
  yield put(GET_USER.started());
  const { token } = payload;
  SpotifySDK.setToken(token);
  const user = yield call(SpotifySDK.getUser);
  yield put(GET_USER.completed({ user }));
  yield put(push("/"));
}

export function* watchGetUser() {
  yield takeLatest(GET_USER.request.TYPE, triggerLoginSaga);
}

import { call, takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { GET_USER, GET_TOKEN } from "../actions/auth";
import SpotifySDK from "../spotifySdk/SpotifySDK";

function* triggerGetUser() {
  yield put(GET_USER.started());
  const user = yield call(SpotifySDK.getUser);
  if (user.error) {
    return yield put(GET_USER.failed());
  }

  yield put(GET_USER.completed({ user }));
}

export function* watchGetUser() {
  yield takeLatest(GET_USER.request.TYPE, triggerGetUser);
}

function* triggerLoginSaga({ payload }: any) {
  yield put(GET_TOKEN.started());
  const { token } = payload;
  SpotifySDK.setToken(token);
  yield put(push("/"));
}

export function* watchLogin() {
  yield takeLatest(GET_TOKEN.request.TYPE, triggerLoginSaga);
}

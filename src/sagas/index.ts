import { all } from "redux-saga/effects";
import { watchGetUser } from "./watchAuthSaga";
import { watchGetTopTracks } from "./watchTopTracksSaga";

export default function* rootSaga() {
  yield all([watchGetUser(), watchGetTopTracks()]);
}

import { call, takeLatest, put } from "redux-saga/effects";
import { GET_TOP_TRACKS } from "../actions/topTracksActions";
import SpotifySDK from "../spotifySdk/SpotifySDK";

function* triggerGetTopTracks() {
  yield put(GET_TOP_TRACKS.started());
  const songs = yield call(() => SpotifySDK.getTopTracks("tracks"));
  yield put(GET_TOP_TRACKS.completed({ songs }));
}

export function* watchGetTopTracks() {
  yield takeLatest(GET_TOP_TRACKS.request.TYPE, triggerGetTopTracks);
}

import { all } from "redux-saga/effects";
import { watchGetUser, watchLogin } from "./watchAuthSaga";
import { watchGetTopTracks } from "./watchTopTracksSaga";
import { watchGetRecommentationSeed } from "./watchRecommendationSeedSaga";
import { watchFailedSagas } from "./watchErrorSaga";
import { watchCreatePlaylist } from "./watchCreatePlaylistSaga";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchGetUser(),
    watchGetTopTracks(),
    watchGetRecommentationSeed(),
    watchFailedSagas(),
    watchCreatePlaylist()
  ]);
}

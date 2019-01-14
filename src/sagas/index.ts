import { all } from "redux-saga/effects";
import { watchGetUser } from "./watchAuthSaga";
import { watchGetTopTracks } from "./watchTopTracksSaga";
import { watchGetRecommentationSeed } from "./watchRecommendationSeedSaga";
import { watchFailedSagas } from "./watchErrorSaga";

export default function* rootSaga() {
  yield all([
    watchGetUser(),
    watchGetTopTracks(),
    watchGetRecommentationSeed(),
    watchFailedSagas()
  ]);
}

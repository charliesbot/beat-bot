import { all } from "redux-saga/effects";
import { watchGetUser, watchLogin } from "./watchAuthSaga";
import { watchGetRecommentationSeed } from "./watchRecommendationSeedSaga";
import { watchFailedSagas } from "./watchErrorSaga";
import { watchCreatePlaylist } from "./watchCreatePlaylistSaga";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchGetUser(),
    watchGetRecommentationSeed(),
    watchFailedSagas(),
    watchCreatePlaylist()
  ]);
}

import { call, takeLatest, put } from "redux-saga/effects";
import { GET_RECOMMENDATION_SEED } from "../actions/recommendationSeedActions";
import SpotifySDK from "../spotifySdk/SpotifySDK";

function* triggerGetRecommendationSeed(payload: any) {
  yield put(GET_RECOMMENDATION_SEED.started());
  const { seedTracks } = payload;
  const songs = yield call(() =>
    SpotifySDK.getRecommendationsBasedOnSeeds({ seedTracks })
  );
  yield put(GET_RECOMMENDATION_SEED.completed({ songs }));
}

export function* watchGetRecommentationSeed() {
  yield takeLatest(
    GET_RECOMMENDATION_SEED.request.TYPE,
    triggerGetRecommendationSeed
  );
}

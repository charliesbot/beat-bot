import { call, takeLatest, put, select } from "redux-saga/effects";
import { show } from "redux-modal";
import { CREATE_PLAYLIST } from "../actions/createPlaylistAction";
import SpotifySDK from "../spotifySdk/SpotifySDK";

function* triggerCreatePlaylist({ payload }: any) {
  yield put(CREATE_PLAYLIST.started());
  const { user, songs, recommendedSongs } = yield select((state: any) => {
    return {
      user: state.user,
      songs: state.songs,
      recommendedSongs: state.recommendationSeed
    };
  });

  const uris = recommendedSongs.map((r: any) => songs[r].uri);

  const playlist = yield call(() =>
    SpotifySDK.createPlaylist(user.id, payload.playlistName)
  );

  yield call(() => SpotifySDK.addTracksToPlaylist(playlist.id, uris));

  yield put(show("shareNewPlaylistModal", { message: { playlist } }));
}

export function* watchCreatePlaylist() {
  yield takeLatest(CREATE_PLAYLIST.request.TYPE, triggerCreatePlaylist);
}

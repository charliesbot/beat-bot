import { call, takeLatest, put, select } from "redux-saga/effects";
import { CREATE_PLAYLIST } from "../actions/createPlaylistAction";
import SpotifySDK from "../spotifySdk/SpotifySDK";

function* triggerCreatePlaylist() {
  yield put(CREATE_PLAYLIST.started());
  const { user, songs, recommendedSongs, playlistName } = yield select(
    (state: any) => {
      return {
        user: state.user,
        songs: state.songs,
        recommendedSongs: state.playlistWizard.songs,
        playlistName: state.playlistWizard.title,
        playlistDescription: state.playlistWizard.playlistDescription
      };
    }
  );

  const uris = recommendedSongs.map((r: any) => songs[r].uri);

  const playlist = yield call(() =>
    SpotifySDK.createPlaylist(user.id, playlistName)
  );

  yield call(() => SpotifySDK.addTracksToPlaylist(playlist.id, uris));

  yield put(CREATE_PLAYLIST.completed({ playlist }));
}

export function* watchCreatePlaylist() {
  yield takeLatest(CREATE_PLAYLIST.request.TYPE, triggerCreatePlaylist);
}

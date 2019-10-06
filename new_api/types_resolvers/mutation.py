from ariadne import MutationType, convert_kwargs_to_snake_case
from typing import List
from spotipy import Spotify

mutation = MutationType()


@mutation.field("createPlaylistWithSongs")
@convert_kwargs_to_snake_case
def resolve_create_playlist_with_songs(
    _, info, user_id: str, uris: List[str], playlist_name="Playlist made by Beat Bot"
):
    spotify: Spotify = info.context["spotify"]
    playlist = spotify.user_playlist_create(
        user=user_id, name=playlist_name, public=False
    )

    spotify.user_playlist_add_tracks(user=user_id, playlist_id=playlist['id'], tracks=uris)

    return {"playlist": playlist}

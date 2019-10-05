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
    playlist = spotify.playlist_create(
        user_id=user_id, name=playlist_name, public=False
    )

    spotify.playlist_tracks_add(playlist_id=playlist.id, track_ids=uris)

    return {"playlist": playlist}

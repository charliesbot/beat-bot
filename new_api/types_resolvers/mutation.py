from ariadne import MutationType, convert_kwargs_to_snake_case
from graphql.type import GraphQLResolveInfo
from typing import List, Any
from spotipy import Spotify

mutation = MutationType()


@mutation.field("createPlaylistWithSongs")
@convert_kwargs_to_snake_case
def resolve_create_playlist_with_songs(
    _: Any,
    info: GraphQLResolveInfo,
    user_id: str,
    uris: List[str],
    playlist_name: str = "Playlist made by Beat Bot",
) -> Any:
    spotify: Spotify = info.context["spotify"]
    playlist = spotify.user_playlist_create(
        user=user_id, name=playlist_name, public=False
    )

    spotify.user_playlist_add_tracks(
        user=user_id, playlist_id=playlist["id"], tracks=uris
    )

    return {"playlist": playlist}

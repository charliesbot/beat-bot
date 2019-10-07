from ariadne import ObjectType
from typing import List, Any

playlist = ObjectType("Playlist")


@playlist.field("externalUrls")
def resolve_playlist_externalUrls(playlist: Any, *_: Any) -> List[Any]:
    return playlist["external_urls"]

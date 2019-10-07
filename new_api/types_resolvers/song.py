from ariadne import ObjectType
from typing import Any

song = ObjectType("Song")


@song.field("previewUrl")
def resolve_song_previewUrl(song: Any, *_: Any) -> str:
    return song["preview_url"]

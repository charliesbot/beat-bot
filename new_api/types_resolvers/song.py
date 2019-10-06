from ariadne import ObjectType

song = ObjectType("Song")


@song.field("previewUrl")
def resolve_song_previewUrl(song, *_) -> str:
    return song["preview_url"]

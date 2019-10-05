from ariadne import ObjectType

playlist = ObjectType("Playlist")


@playlist.field("externalUrls")
def resolve_playlist_externalUrls(playlist, *_) -> str:
    return playlist.external_urls

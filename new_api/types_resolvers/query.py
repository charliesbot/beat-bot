from ariadne import QueryType, convert_kwargs_to_snake_case
from graphql.type import GraphQLResolveInfo
from typing import List, Any
from spotipy import Spotify

query = QueryType()


@query.field("user")
def resolve_user(_: Any, info: GraphQLResolveInfo) -> Any:
    spotify: Spotify = info.context["spotify"]
    return spotify.current_user()


@query.field("playlist")
@convert_kwargs_to_snake_case
def resolve_playlist(_: Any, info: GraphQLResolveInfo, playlist_id: str) -> Any:
    spotify: Spotify = info.context["spotify"]
    return spotify.user_playlist(playlist_id=playlist_id)


@query.field("recommendations")
@convert_kwargs_to_snake_case
def resolve_recommendations(_: Any, info: GraphQLResolveInfo, seed_tracks: List[str]) -> Any:
    spotify = info.context["spotify"]
    result = spotify.recommendations(seed_tracks=seed_tracks)
    return result["tracks"]


@query.field("topTracks")
def resolve_topTracks(_: Any, info: GraphQLResolveInfo) -> Any:
    spotify = info.context["spotify"]
    result = spotify.current_user_top_tracks(time_range="medium_term", limit=49)
    return result["items"]

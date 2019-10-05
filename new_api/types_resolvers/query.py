from ariadne import QueryType

query = QueryType()


@query.field("user")
def resolve_user(_, info):
    spotify = info.context["spotify"]
    return spotify.current_user()


@query.field("playlist")
def resolve_playlist(_, info):
    spotify = info.context["spotify"]
    return spotify.current_user()


@query.field("recommendations")
def resolve_recommendations(_, info):
    spotify = info.context["spotify"]
    return spotify.current_user()


@query.field("topTracks")
def resolve_topTracks(_, info):
    spotify = info.context["spotify"]
    result = spotify.current_user_top_tracks(time_range="medium_term", limit=49)
    return result.items

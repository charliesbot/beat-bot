from ariadne import graphql_sync, make_executable_schema, gql
from ariadne.constants import PLAYGROUND_HTML
from spotipy import Spotify
from flask import Flask, request, jsonify
from .types_resolvers.query import query
from .types_resolvers.user import user
from .types_resolvers.playlist import playlist
from .types_resolvers.song import song

type_defs = gql(
    """
        type Album {
            id: ID!
            name: String!
            uri: String!
            images: [Image!]!
        }

        type Artist {
            id: ID
            href: String
            name: String
            type: String
            uri: String
        }

        type Playlist {
            id: ID
            collaborative: Boolean!
            description: String
            name: String!
            href: String!
            images: [Image!]!
            externalUrls: ExternalUrls!
            public: Boolean!
            snapshotId: ID!
            uri: String!
            type: String!
        }

        type Song {
            id: ID!
            name: String!
            previewUrl: String
            album: Album!
            artists: [Artist!]!
            uri: String!
        }

        type Image {
            width: Int!
            height: Int!
            url: String!
        }

        type ExternalUrls {
            spotify: String
        }

        type User {
            id: ID
            name: String
            externalUrls: ExternalUrls
            href: String
            images: [Image]
            type: String
            uri: String
        }

        type Query {
            user: User
            playlist(playlistId: ID!): Playlist!
            topTracks: [Song!]!
            recommendations(seedTracks: [ID]): [Song!]!
        }
    """
)

schema = make_executable_schema(type_defs, [query, user, playlist, song])

app = Flask(__name__)


@app.route("/graphql", methods=["GET"])
def graphql_playgroud():
    # On GET request serve GraphQL Playground
    # You don't need to provide Playground if you don't want to
    # but keep on mind this will not prohibit clients from
    # exploring your API using desktop GraphQL Playground app.
    return PLAYGROUND_HTML, 200


@app.route("/graphql", methods=["POST"])
def graphql_server():
    # GraphQL queries are always sent as POST
    data = request.get_json()

    token: str = request.headers.get("authorization")

    # this is Bearer xxxxx, so we remove "Bearer"
    token = token.split(" ")[1]

    spotify = Spotify(token)

    success, result = graphql_sync(
        schema, data, context_value={"spotify": spotify}, debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code


if __name__ == "__main__":
    app.run(debug=True)

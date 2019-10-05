from ariadne import QueryType, graphql_sync, make_executable_schema, gql
from ariadne.constants import PLAYGROUND_HTML
from spotipy import Spotify
from flask import Flask, request, jsonify
from types_resolvers.user import user

type_defs = gql(
    """
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
        }
    """
)

query = QueryType()


@query.field("user")
def resolve_user(_, info):
    spotify = info.context["spotify"]
    user = spotify.current_user()
    return user


schema = make_executable_schema(type_defs, [query, user])

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

    token = request.headers.get("authorization")

    spotify = Spotify(token)

    success, result = graphql_sync(
        schema, data, context_value={"spotify": spotify}, debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code


if __name__ == "__main__":
    app.run(debug=True)

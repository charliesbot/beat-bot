from os import getenv
from spotipy.scope import AuthorisationScopes, Scope
from spotipy.util import prompt_for_user_token
from flask import Flask, request

app = Flask(__name__)


@app.route("/oauth")
def api() -> Flask:
    protocol = request.headers.get("x-forwarded-proto")
    url = request.headers.get("x-forwarded-host")

    client_id = getenv("SPOTIFY_CLIENT_ID")
    client_secret = getenv("SPOTIFY_CLIENT_SECRET")

    redirect_uri = f"{protocol}://{url}"
    print(f"valores {redirect_uri}")

    token = prompt_for_user_token(
        client_id,
        client_secret,
        redirect_uri,
        scope=Scope(
            AuthorisationScopes.user_top_read,
            AuthorisationScopes.playlist_modify_private,
        ),
    )

    print(f"token {token}")
    print(f"redirect {redirect_uri}")

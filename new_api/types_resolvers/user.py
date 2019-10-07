from ariadne import ObjectType
from typing import Any

user = ObjectType("User")


@user.field("name")
def resolve_user_name(user: Any, *_: Any) -> str:
    return user["display_name"]

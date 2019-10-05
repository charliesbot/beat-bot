from ariadne import ObjectType

user = ObjectType("User")


@user.field("name")
def resolve_user_name(user, *_) -> str:
    return user.display_name

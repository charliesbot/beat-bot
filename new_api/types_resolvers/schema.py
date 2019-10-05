from ariadne import QueryType

query = QueryType()

schema_query = """
    type Query {
        user: User
    }
"""


@query.field("user")
def resolve_user(_, info):
    user = {"id": "1", "name": "pepe", "href": "hi", "type": "1", "uri": "1"}
    return user

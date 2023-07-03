const { GraphQLInt, GraphQLString, GraphQLObjectType } = require("graphql");

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        gender: { type: GraphQLString },
        status: { type: GraphQLString }
    })
})
module.exports = UserType
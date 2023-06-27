const graphql = require('graphql')
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql
const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})
const rootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        codeImprove: {
            type: new GraphQLList(userType),
            resolve(parent, args) {
                let data = [
                    { id: 1, name: 'code improve', email: 'code@gmail.com', phone: 9898989898 },
                    { id: 2, name: 'code optimize', email: 'codeOptimize@gmail.com', phone: 9898989898 }]
                return data
            }
        }
    }
})
module.exports = new GraphQLSchema({ query: rootQuery })
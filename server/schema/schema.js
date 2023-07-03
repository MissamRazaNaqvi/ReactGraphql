const graphql = require('graphql')
const { AddUser, UpdateUser, DeleteUser } = require('./Mutation/user')

const { GraphQLObjectType, GraphQLSchema } = graphql

const { UserList, SpecificUser, UserDetails } = require('./Query/Query')
const rootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        userList: UserList,
        specificUser: SpecificUser,
        userDetails: UserDetails
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: AddUser,
        updateUser: UpdateUser,
        deleteUser: DeleteUser
    }
})
module.exports = new GraphQLSchema({ query: rootQuery, mutation: Mutation })
const { GraphQLList, GraphQLInt } = require("graphql")
const UserType = require('../Typedefs/usertype')
const { user } = require('../../models/Users')

// let db = require('../../models/index')
// const Users = db.user

module.exports.UserList = {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        let { dbConfig } = parent
        let data = dbConfig.findAll()
        return data
    }
}
module.exports.SpecificUser = {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        let data = Users.findAll({ where: { id: 1 } })
        return data
    }
}
module.exports.UserDetails = {
    type: new GraphQLList(UserType),
    args: {
        id: { type: GraphQLInt }
    },
    resolve(parent, args) {
        let { dbConfig } = parent
        let data = dbConfig.findAll({ where: { id: args.id } })
        return data
    }
}
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
// SpecificUser using direct fetch from database
module.exports.SpecificUser = {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        let data = user.findAll({ where: { id: 1 } })
        return data
    }
}
// use root variable of main index file using parent
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
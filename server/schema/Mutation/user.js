const { GraphQLString, GraphQLInt } = require("graphql")
const StatusType = require("../Typedefs/statusType")

let db = require('../../models/index')
const Users = db.user


module.exports.AddUser = {
    type: StatusType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        status: { type: GraphQLString }
    },
    resolve(parent, args) {
        Users.create({
            name: args.name,
            email: args.email,
            gender: args.gender,
            status: args.status
        })
        return args
    }
}
module.exports.UpdateUser = {
    type: StatusType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        status: { type: GraphQLString }
    },
    resolve: (parent, args) => {
        Users.update(
            {
                name: args.name,
                email: args.email,
                gender: args.gender,
                status: args.status
            },
            {
                where: { id: args.id }
            }
        )
        return { success: true, message: "inserted Successfully", error: '' }
    }
}
module.exports.DeleteUser = {
    type: StatusType,
    args: { id: { type: GraphQLInt } },
    resolve: (parent, args) => {
        Users.destroy({ where: { id: args.id } })
        return { success: true, message: "Deleted Successfully", error: '' }
    }
}
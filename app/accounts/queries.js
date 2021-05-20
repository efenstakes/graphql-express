const {
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql')

const UserType = require('./type')
const { users } = require('../data')


// get all users
const getUsers =  {
    type: GraphQLList(UserType),
    resolve(context, args) {
        return users
    }
}

// get a user
const getUser =  {
    type: UserType,
    args: {
        id: {
            type: GraphQLInt,
        }
    },
    resolve(_context, args) {
        return users.find(u=> u.id == args.id)
    }
}


module.exports = {
    getUsers,
    getUser,
}
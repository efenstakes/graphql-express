const {
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLID,
}  = require('graphql')


// data
const { books } = require('../data')


const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'User Type',
    fields: ()=> ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        books: {
            type: GraphQLList(require('../books/type')),
            resolve(context, args) {
                console.log('context ', context)
                console.log('args ', args)

                return books.filter(b=> b.authorID === context.id)
            }
        }
    })
})

module.exports = UserType
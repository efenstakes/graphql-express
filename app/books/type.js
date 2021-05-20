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
const { users } = require('../data')


const BookType = new GraphQLObjectType({
    name: 'BookType',
    description: 'Book Type',
    fields: ()=> ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        authorID: {
            type: GraphQLID,
        },
        author: {
            type: require('../accounts/type'),
            resolve(context, args) {
                return users.find(u=> u.id === context.authorID)
            }
        },
    })
})

module.exports = BookType
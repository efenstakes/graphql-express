const { GraphQLList, GraphQLInt, GraphQLID, GraphQLString } = require("graphql");


const BookType = require('./type')

// data
const { books } = require('../data')


// get all
const getBooks = {
    type: GraphQLList(BookType),
    resolve(context, args) {
        return books
    }
}


// get a sincle book
const getBook = {
    type: BookType,
    args: {
        id: {
            type: GraphQLString,
        },
    },
    resolve(context, args) {
        return books.find(b=> b.id === args.id)
    }
}



module.exports = {
    getBooks,
    getBook,
}
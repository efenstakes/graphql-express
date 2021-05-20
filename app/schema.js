const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql')


const { getUser, getUsers } = require('./accounts/queries')
const { getBooks, getBook } = require('./books/queries')


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Root Query description',
    fields: ()=> ({
        

            // accounts
            getUser,
            getUsers,
    
    
    
            // books
            getBooks, 
            getBook
    
        
    })
})


const schema = new GraphQLSchema({
    query: RootQuery,
})


module.exports = schema
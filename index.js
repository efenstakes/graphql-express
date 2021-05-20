const express = require('express')
const { graphqlHTTP } = require('express-graphql')

// schema
const schema = require('./app/schema')

const app = express()





app.get('/', (req, res)=> {
    res.json({
        'page': 'home',
        'message': 'ql the damn thing',
    })
})

app.use(
    '/api',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }) 
)

app.listen(4000, ()=> {
    console.log('started gql server')
})
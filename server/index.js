const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const app = express()

app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(8000, console.log(`server running on port 8000`))
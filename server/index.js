const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const app = express()
const cors = require('cors')
require('./models/index')
app.use(express.json())
app.use(cors())

let db = require('./models/index')
const Users = db.user

const root = {
    dbConfig: Users
}
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8000, console.log(`server running on port 8000`))
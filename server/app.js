const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const app = express()

const uri = "mongodb+srv://test:nopass@cluster0.xdcqp.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(uri)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('server running on port 4000')
})
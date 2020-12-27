const arc = require('@architect/functions')
const { ApolloServer } = require('apollo-server-lambda')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolver')

const server = new ApolloServer({ typeDefs, resolvers })
const handler = server.createHandler({ 
  cors: { 
    origin: '*', 
    allowedHeaders: { 'Content-Type' } 
  } 
})

exports.handler = function(event, context, callback) {
  const body = arc.http.helpers.bodyParser(event)
  // Support for AWS HTTP API syntax
  event.httpMethod = event.httpMethod
    ? event.httpMethod
    : event.requestContext.http.method
  // Body is now parsed, re-encode to JSON for Apollo
  event.body = JSON.stringify(body)
  handler(event, context, callback)
}
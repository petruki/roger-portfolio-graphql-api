const arc = require('@architect/functions')
const { ApolloServer } = require('apollo-server-lambda')
const isBase64 = require('is-base64');
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolver')

const server = new ApolloServer({ typeDefs, resolvers })
const handler = server.createHandler({ cors: { origin: '*' } })

exports.handler = function(event, context, callback) {
  const body = arc.http.helpers.bodyParser(event)
  // Support for AWS HTTP API syntax
  event.httpMethod = event.httpMethod
    ? event.httpMethod
    : event.requestContext.http.method

  // Body is now parsed, verifies if enconded properly
  if (!isBase64(body))
    event.body = Buffer.from(body).toString('base64')

  handler(event, context, callback)
}

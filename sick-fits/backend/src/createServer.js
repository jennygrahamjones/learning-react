// middleware, built on top of express/apollo
const { GraphQLServer } = require("graphql-yoga");

// resolvers define the endpoints we're going to expose for querying and mutating data
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const db = require("./db");

// create graphql yoga server...
function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;

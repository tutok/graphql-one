var graphql = require('graphql');

var count = 0;

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: graphql.GraphQLInt,
        resolve: function() {
          return count;
        }
      }
    }
  })
});

module.exports = schema;
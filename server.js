
var express = require('express');
var schema = require('./schema.js');
var graphql = require('graphql');
var bodyparser = require('body-parser');

var app  = express();
var PORT = 3000;

app.use(bodyparser.text({type: 'application/graphql'}));

app.post('/graphql', function(req, res){
  console.log(schema);
  
  graphql(schema.schema, req.body)
  .then(function(result){
    res.send(JSON.stringify(result, null, 2))
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
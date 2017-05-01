'use strict';

const Hapi = require('hapi');

// create server
const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8080,
});

// add routes
server.route({
  method: 'GET',
  path:'/', 
  handler: function (request, reply) {
    return reply('hello world');
  }
});

// start server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

// export server
module.exports = server;


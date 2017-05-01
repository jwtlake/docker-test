const test = require('tape');
const server = require('../src/index.js');

test('hello world route works', (t) => {
  t.plan(2);

  server.inject({ method: 'GET', url: '/'}, (response) => {
    t.equal(response.statusCode, 200, '200 status code returned');
    t.equal(response.payload, 'hello world', 'hello world text returned');
  });
});

// clean up
test.onFinish(() => {
 server.stop();
});

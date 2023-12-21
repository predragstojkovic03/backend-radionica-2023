const http = require('http');

const PORT = 5000;

http
  .createServer(function (req, res) {
    if (req.url === '/users' && req.method === 'GET') {
      res.write('Users');
      res.end();
    }

    if (req.url === '/blog') {
      res.write('Blog');
      res.end();
    }

    res.end();
  })
  .listen(PORT)
  .on('listening', () => {
    console.log('Listening on port ' + PORT);
  });

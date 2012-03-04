module.exports = require('http').createServer(function (req, res) {
  switch (req.url) {
    case '/inst':
      res.writeHeader(200, { 'content-type' : 'text/plain' });
      res.end('1');
      break;
    case '/env':
      res.writeHeader(200, { 'content-type' : 'text/plain' });
      res.end(process.env.BALANCERTEST);
      break;
  }
});

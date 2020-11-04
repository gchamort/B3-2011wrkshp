const http = require('http');

const hostname = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Groupe 8 présidents !");
});

server.listen(port, hostname, () => {
  console.log('Server running at http://'+hostname+':'+port+'/');
});
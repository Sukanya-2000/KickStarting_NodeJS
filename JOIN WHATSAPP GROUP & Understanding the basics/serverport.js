const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {
  console.log('Hey, Sukanya!'); // Replace 'Your Name' with your actual name
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

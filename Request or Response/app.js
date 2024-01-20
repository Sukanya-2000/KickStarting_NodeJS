const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  let responseMessage;

  switch (url) {
    case '/':
    case '/home':
      responseMessage = 'Welcome home';
      break;
    case '/about':
      responseMessage = 'Welcome to About Us page';
      break;
    case '/node':
      responseMessage = 'Welcome to my Node Js project';
      break;
    default:
      responseMessage = 'Page not found';
      break;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(responseMessage);
});

const port = 3000; // You can change this to any available port

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

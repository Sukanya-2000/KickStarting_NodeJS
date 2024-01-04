const htttp = require('http');
const server = http.createServer((req,res) => {
  console.log(req);
});

server.listen(4000); //port number can be anything 

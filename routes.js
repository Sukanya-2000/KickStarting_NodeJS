const fs = require('fs')

const requestHandler=(req , res)=>{

const url = req.url
const method = req.method

if(url==='/'){
    const data = fs.readFileSync('./message.txt', 'utf8');
    res.write('<html>')
    res.write('<head><title>Ra Kuchvi BRO</title></head>')
    res.write(`<body><form action="/message" method="POST"><div>${data}</div><input type="text" name="message" /><button type="submit" >Submit</button></form></body>`)
    res.write('</html>')
    return res.end()
  }

  if(url==='/message' && method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk)
    })
    req.on('end',()=>{
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[0];
      console.log(message)
      fs.writeFileSync('message.txt' , message)
    })
    fs.writeFileSync('hello.txt', "DUMMY")
    res.statusCode= 302;
    res.setHeader('Location', '/')
    return res.end()
  }

  res.write('<html>')
  res.write('<head><title>My first page</title></head>')
  res.write('<body>Welcome to my Node js Project</body>')
  res.write('</html>')
  res.end()

}

//module.exports = requestHandler;
module.exports = {
    handler : requestHandler,
    someText : "Hey, There... I'm Sukanya"
}
const http = require('http');
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });



  // if(req.url === '/'){
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) =>{
  //     if(err){
  //       throw err
  //     }
  //     res.writeHead(200, {
  //       'Content-Type' : 'text/html'
  //     })
  //     res.end(data);
  //   })
  // }
  //
  // if(req.url === '/content'){
  //   fs.readFile(path.join(__dirname, 'public', 'content.html'), (err, data) =>{
  //     if(err){
  //       throw err
  //     }
  //     res.writeHead(200, {
  //       'Content-Type' : 'text/html'
  //     })
  //     res.end(data);
  //   })
  // }

  const error = 'error.html'

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

  const ext = path.extname(filePath);

  if(!ext){
    filePath += '.html';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'forbitten.html'), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error');
        } else {
          res.end(data);
          res.writeHead(404, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      });
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(content)
    }
  });
});


const port = '3001'
server.listen(port, () => {
  console.log(`Server has been started... on port: ${port}`);
})

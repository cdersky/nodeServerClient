const http = require('http');
const fs = require('fs');


// create a server
const server = http.createServer((req, res) => {

  // data recevied from the client
  // can this be replace with a stream?
  req.on('data', chunk => {
    console.log('chunk from client:', chunk.toString());
  });  

  // data received from a file
  // can this be replace with a stream?
  res.on('data', chunk => {
    console.log('chunk from file:', chunk.toString());
  });

  // send info from sendMe.txt to the client with fs
  fs.readFile('sendMe.txt', 'utf8', (err, data) => {
    if(err) { // check for error
      console.log('error reading in file in the server file', err);
    
    } else { // if no error, send data
      console.log('sending data to client');
      res.write(data); // send data
      
      res.emit('close'); // force close event, this is superfluous

      res.end('Goodbye from the server file.'); // end 
      
    }
  });
  

});

const port = 8080;
console.log('listening on port ', port);
server.listen(port); // open server
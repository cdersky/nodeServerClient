const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 8080;
const url = 'http://127.0.0.1:8080';


var method = process.argv[2] || 'GET';

if (method.toUpperCase() === 'GET'){ 
  // //////////////// GET REQUEST
  http.get(url, res => { // rewrite this with a http.request
    console.log('written in the CLIENT file: Got response: ', res.statusCode, res.statusMessage);

    res.on('data', chunk => {
      console.log('chunk:', chunk.toString());

    
    }).on('close', function(){
      console.log('written in the CLIENT file: CLOSE event heard');

    }).on('end', function(){
      console.log('written in the CLIENT file: END event heard');

    }).on('error', e => {
      console.log('Got error: ', e.message);
    });
  });
} else {

//////////////// POST REQUEST
  var options = {
    hostname: hostname,
    port: port,
    method: 'POST'
  };

  var req = http.request(options, res => {
    console.log('logging from http.request (in client)');

    // res.on('end', () => {
    //   console.log('No more data in response.');
    // console.log('END');
    // });
  });

  req.on('error', e => {
    console.log(`problem with request: ${e.message}`);
  });

  // open a readStream
  var rs = fs.createReadStream('clientToServer.txt', 'utf8', function(err, data){
    // if(err){ // check for error
    //   console.log('Error reading in file in the client file', err);
    // } else {
    //   console.log('DATA reading in file in the client file', data);
    // }
    // req.end(); // end
  });

  // pipe the read stream to the desired destination
  rs.pipe(req);
};

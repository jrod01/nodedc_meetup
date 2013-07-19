//var os = require('os');
//function sayshostname(argument){
//console.log("Hello", argument, ", my hostname is:" ,os.hostname()); 
//}
//argv[0] => node 
//argv[1] => the name fo the script (hello.js)
//arvg[2] => node ./hello.js jen // jen 

//sayshostname(process.argv[2]);

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<html><head></head><body><h1>Hello World</h1></body></html>\n");
  console.log('Response sent at ' + new Date());
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:3000/");  
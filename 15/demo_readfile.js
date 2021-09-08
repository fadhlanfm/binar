const http = require("http");
const fs = require("fs");

// request: apapun yg masuk dari client-side ke server-side
// response: apapun yg keluar dari server-side ke client-side
http.createServer(function (request, response) {
  fs.readFile('demofile1.html', function (error, data) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(data);
    return response.end();
  });
}).listen(8080);
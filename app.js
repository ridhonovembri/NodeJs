const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type','text/plain');
    res.write('this is from server to client test again');
    res.end();
});

server.listen(8000,'localhost');
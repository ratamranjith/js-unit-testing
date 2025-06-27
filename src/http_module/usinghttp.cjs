let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.end('Hello World');
}).listen(1337, '127.0.0.1', () => {
    console.log("Server is running on Port 1337");
})


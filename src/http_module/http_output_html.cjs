const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {

    try {

        if (req.url === '/') {
            res.writeHead(200, {
                'Content-Type': 'text/html',
            })
            let htmlPath = __dirname + '/sample.html';
            fs.createReadStream(htmlPath).pipe(res);
        } else if (req.url === '/api') {
            let time = Date.now();
            let apiObj = {
                'name': 'intruder',
                'time': `${time}`
            }
            res.writeHead(200, {
                'Content-Type': 'application/json',
            })
            res.end(JSON.stringify(apiObj));
        }

    } catch (error) {
        console.log("Error occoured");
    }

}).listen(1234, '127.0.0.1');


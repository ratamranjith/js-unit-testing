let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    var message = "Vanakkam da mapla";
    let html = fs.readFileSync(__dirname + '/tailwind_color_combinations.html', 'utf8');
    html.replace('{Message}', message);
    res.end(html);
}).listen(8564, '127.0.0.1', () => {
    console.log('Server is listening');
})
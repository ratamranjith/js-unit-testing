const express = require('express');
let app = express();
let port = process.env.PORT || 1234;

app.get('/', (req, res) => {
    res.send('<html><head><link rel="stylesheet" type="text/css" href="assets/style.css" /></head><body><h1>Hello World on <code>\\</code> </h1></body></html>'

    )
})

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log('requestt url' + req.query.qstr);
    next();
})

app.get('/api', (req, res) => {
    res.send('<html><head><link rel=stylesheet type=text/css href=assets/style.css /></head><body><h1>Hello World on <code>API</code> </h1></body></html>'

    )
})

app.get('/api/:id', (req, res) => {
    res.send(`<html><head><link rel="stylesheet" type="text/css" href="assets/style.css" /></head><body><h1>Hello World on <code>${JSON.stringify(req.params.id)}</code> </h1></body></html>`

    )
})

app.listen(port, '127.0.0.1', () => {
    console.log('Server is listening');
});

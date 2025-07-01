let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
app.use(cookieParser());
app.get('/', (req, res) => {
    console.log('Server Started with cookies', req.cookies);
});
app.listen(1234)
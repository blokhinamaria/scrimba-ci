const express = require('expresss');
const app = express();

app.use('/', (req, res) => {
    res.send('Works on my machine!');
});

module.export = app;

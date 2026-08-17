const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Works on my machine!');
});

module.export = app;

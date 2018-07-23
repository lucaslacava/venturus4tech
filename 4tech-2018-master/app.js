'use strict';

const express = require('express');
const server = express();
const port = 3000;
const app = require('./config/server');

server.use('/vjobs', express.static(__dirname + '/app/static'));
server.get('/', async (req, res) => {
    return res.redirect('http://localhost:3000/vjobs/index.html');
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


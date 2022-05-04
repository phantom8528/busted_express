'use strict';
const http = require('http'); //<-- Fix 2: Declared http 
const hostname = '127.0.0.1';
const port = 3333;

const express = require('express'); //<-- Fix 5: Replaced comma with semicolon
const app = express(); //<-- Fix 3: Assigned all express functionality to app variable

const es6Renderer = require('express-es6-template-engine'); //<-- Fix 4: Applied "const" to the beginning of the variable


app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => { // <-- Fix 6: made port and hostname lowercase
    console.log(`Server running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');


app.use('/rangers', rangersController);
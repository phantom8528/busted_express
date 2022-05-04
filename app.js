'use strict';
const http = require('http'); //<-- Fix 2: Declared http 
const hostname = '127.0.0.1';
const port = 3333;

const express = require('express'),
const app = express() //<-- Fix 3: Assigned all express functionality to app variable

const es6Renderer = require('express-es6-template-engine'); //<-- Fix 4: Applied "const" to the beginning of the variable

const app = express();

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');


app.use('/rangers', rangersController);
'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
// const config = require('./config');
const router = require('./routes');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketio(server);

app
  .use(cors)
  .use(bodyParser.json())
  .use(router);


server.listen(port, () => console.log(`Server is listening on port ${port}...`));

 mongoose.connect('mongodb://localhost/ChatAppDatabase', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(console.log('Connection to database established...'))
  .catch(error => console.log(error));





module.exports = { express, mongoose };

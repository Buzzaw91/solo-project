'use strict';

const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./routes');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;



app
.use(cors())
.use(bodyParser.json())
.use(router);

const server = http.createServer(app);

const io = socketio(server);


// Connect to socket.io
 io.on('connection', function(socket){
  console.log('a user connected');
});


server.listen(port, () => console.log(`Server is listening on port ${port}...`));


 mongoose.connect('mongodb://localhost:27017/ChatAppDatabase', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(console.log('Connection to database established...'))
  .catch(error => console.log(error));



module.exports = express;

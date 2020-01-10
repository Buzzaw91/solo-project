'use strict';
const mongoose = require('mongoose');
const mongooseSocketIo = require('mongoose-socket.io');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const chatsSchema = new Schema ({
  //_id: {types: Schema.Types.ObjectId},
  messages: [{ type: ObjectId, ref: 'Messages', required: true }],
  participants: [{ type: ObjectId, ref: 'User', required: true }]
});

const Chats = mongoose.model('Chats', chatsSchema);

module.exports = Chats;

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const chatsSchema = new Schema ({
  messages: [{ type: ObjectId, ref: 'Messages'}],
  participants: [{ type: ObjectId, ref: 'User'}],
  createdBy: {type: ObjectId, ref: 'User'},
  name: String
});

const Chats = mongoose.model('Chats', chatsSchema);

module.exports = Chats;

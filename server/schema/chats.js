'use strict';
const mongoose = require('../index');
const Schema = mongoose.Schema;

const chatsSchema = new Schema ({
  _id: {types: Schema.Types.ObjectId},
  messages: [{ type: Schema.Types.ObjectId, ref: 'Messages', required: true }]
})

const Chats = mongoose.model('Chats', chatsSchema);

module.exports = Chats;

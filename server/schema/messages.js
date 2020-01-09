'use strict';
const mongoose = require('mongoose');
const mongooseSocketIo = require('mongoose-socket.io');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const messagesSchema = new Schema ({
  //_id: { type: Schema.Types.ObjectId },
  text: { type: String, required: true, max: 1000},
  read: Boolean,
  timestamp: { type: Date, default: Date.now },
  sender: { type: ObjectId, ref: 'User' }
});

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;

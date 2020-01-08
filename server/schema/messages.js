'use strict';
const mongoose = require('../index');
const Schema = mongoose.Schema;

const messagesSchema = new Schema ({
  _id: { type: Schema.Types.ObjectId },
  text: { type: String, required: true, max},
  read: Boolean,
  timestamp: { type: Date, default: Date.now },
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;

'use strict';

const Messages = require('../schema/messages');
const Users = require('../schema/users');
const Chats = require('../schema/chats');

exports.getAll = (req, res) => {
  Messages.find({}, (err, messages) => {
    if (err) console.log(err);
    else res.send(messages);
  });
}

exports.sendMsg = async (req, res) => {

  try {
    let message = new Messages(req.body);

    let savedMessage = await message.save()
      console.log('saved');
  }

  catch (err) {
    res.sendStatus(500);
    return console.log('error', err);
  }

  // TODO: emits lacking still

  finally {
    console.log('Message Posted');
    res.sendStatus(200);
  }
}
const posts = [
  { "username": "Mike",
   "post": "postNum1"},

 { "username": "Bob",
   "post": "postNum2"},
   { "username": "Elmo",
   "post": "postNum3"}
 ];

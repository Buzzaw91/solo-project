'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validatePassword = (password) => {
return console.log('TODO...'); // TODO: VALIDATION
}


const usersSchema = new Schema({
  //_id: { type: Schema.Types.ObjectId },
  username: { type: String, required: [true, 'Username required'] },
  password: { type: String,
              required: [true, 'Password required'],
              validate: [validatePassword, 'Please fill with a valid password'],
              minlength: 10
            },
  email: { type: String,
           trim: true,
           lowercase: true,
           unique: true,
           required: 'Email required',
           validate: [validateEmail, 'Please fill with a valid email address']
  },
  contacts: [{ type: ObjectId, ref: 'Users'}],
  chats: [{type: ObjectId, ref: 'Chats'}]

});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

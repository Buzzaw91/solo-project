'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validatePassword = (password) => {
return console.log('TODO...'); // TODO: VALIDATION
}


const userSchema = new Schema({
  //_id: { type: Schema.Types.ObjectId },
  username: { type: String, required: [true, 'Username required'], sparse: true },
  password: { type: String,
              required: [true, 'Password required'],
              validate: [validatePassword, 'Please fill with a valid password'],
              minlength: 10,
              strict: false
            },
  email: { type: String,
           trim: true,
           lowercase: true,
           sparse: true,
           unique: true,
           required: 'Email required',
           validate: [validateEmail, 'Please fill with a valid email address']
  },
  contacts: [{ type: ObjectId, ref: 'User'}],
  chats: [{type: ObjectId, ref: 'Chats'}]

});

// generating a hashed password with bcryptjs
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(6), null)
}

// checking if password is valid on login
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}



const User = mongoose.model('User', userSchema);

module.exports = User;

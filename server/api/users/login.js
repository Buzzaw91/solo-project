import { User } from '../../models/models'
import config from '../../config/index'
import jwt from 'jsonwebtoken'

async function action(req, res) {
  const { email, password } = req.body
  console.log(email)
  // check if the user exists
  const user = await User.findOne({ email: email.toLowerCase() })
  if(!user) return res.status(400).send('User not found')

  // check if the password is correct
  // validPassword function comes from the model file
  const valid = user.validPassword(password)
  if(!valid) return res.status(400).send('Incorrect password')

  const tokenData = { id: user.id },
    // create a token
    token = jwt.sign(tokenData, config.JWT_SECRET, { expiresIn: '14d' })

    console.log('user: ', user)
    console.log('token : ', token)
    console.log('JWT_SECRET: ',config.JWT_SECRET)
    console.log('tokenData : ', tokenData)
  // send the token and user object as response
  res.send({ user, token })
}

const login = {
  method: 'post',
  action
}

export default login

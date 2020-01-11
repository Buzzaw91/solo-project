import { User } from '../../models/models'

async function action(req, res) {

  try {
    const users = await User.find()
    res.send(users)
  }
  catch (err) {
    console.log(err)
  }
}

const getUsers = {
  method: 'get',
  action
}

export default getUsers

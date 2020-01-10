import { User } from '../../models/models'

async function action(req, res) {
  const users = await User.find()
  res.send(users)
}

const getUsers = {
  method: 'get',
  action
}

export default getUsers

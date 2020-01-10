import { Messages } from '../../models/models'

async function action(req, res) {
  const messages = await Messages.find()
  res.send(messages)
}

const getMessages = {
  method: 'get',
  action
}

export default getMessages

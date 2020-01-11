import { Chats } from '../../models/models'

async function action(req, res) {

  const { name } = req.body

  const chat = new Chats({
    name,
    createdBy: req.user.id
  })
try {
  await chat.save()
  .then(res.send(true))
}
catch (err) {
  console.log(err)
}

}

const addChat = {
  method: 'post',
  action
}

export default addChat

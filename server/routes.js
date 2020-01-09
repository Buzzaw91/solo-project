require('dotenv').config();
const express = require('express');
const router = express.Router();
const controller = require('./controllers/message');
const auth = require('./authentication/authServer');



router.get('/', (req, res) => {
  res.send('server is up and running!');
});

router.get('/messages', controller.getAll);

router.post('/messages', controller.sendMsg);

router.post('/login', auth.authUser);



module.exports = router;

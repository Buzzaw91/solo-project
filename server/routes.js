require('dotenv').config();
const express = require('express');
const router = express.Router();
const controller = require('./controllers/message');
const auth = require('./authentication/authServer');
// const encryption = require('./services/encryption');



router.get('/', (req, res) => {
  res.send('server is up and running!');
});

router.get('/messages', auth.authenticateToken, controller.getAll);

router.post('/messages', controller.sendMsg);

router.post('/login', auth.authUser);

router.post('/token', auth.getRefresh);

// router.get('/virgil-jwt', encryption.virgilJWT);


module.exports = router;

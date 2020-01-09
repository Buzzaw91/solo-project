'use strict';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

exports.authenticateToken =  (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
    if (token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
}

// Authenticate user
exports.authUser = (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken});
};

// Test get msg
exports = (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
}

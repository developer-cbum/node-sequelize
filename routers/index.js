const express = require('express');
const router = express.Router();

const posts = require(__dirname + '/posts.js');
const members = require(__dirname + '/members.js');


router.use('/', posts);
router.use('/', members);

module.exports = router;

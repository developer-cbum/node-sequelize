const express = require('express');
const router = express.Router();

const posts = require(__dirname + '/posts.js');
const members = require(__dirname + '/members.js');
const files = require(__dirname + '/file.js');


router.use('/', posts);
router.use('/', members);
router.use('/', files);

module.exports = router;

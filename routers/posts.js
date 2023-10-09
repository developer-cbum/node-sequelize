const express = require('express');
const router = express.Router();
const PostController = require('../controller/post/postController');
const PostApiController = require('../controller/post/postApiController');

router.get('/', PostController.goToList);
router.get('/write', PostController.goToWrite);

/* api */
// router.get('/api/post/:postId', PostApiController.getPost);
// router.post('/api/post', PostApiController.createPost);
router.get('/api/post', PostApiController.getPosts);
// router.patch('/:postId', PostApiController.updatePost);
// router.delete('/:postId', PostApiController.deletePost);


module.exports = router;

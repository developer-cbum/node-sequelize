const express = require('express');
const router = express.Router();
const PostController = require('../controller/post/postController');
const PostApiController = require('../controller/post/postApiController');

router.get('/', PostController.goToList);
router.get('/write', PostController.goToWrite);
router.get('/detail/:postId', PostController.goToDetail);

/* api */
// router.get('/api/post/:postId', PostApiController.getPost);
// router.post('/api/post', PostApiController.createPost);
router.get('/api/post', PostApiController.getPosts);
router.get('/api/post/total', PostApiController.getPostTotal);
router.get('/api/post/detail/:postId', PostApiController.getPost);
// router.patch('/:postId', PostApiController.updatePost);
// router.delete('/:postId', PostApiController.deletePost);


module.exports = router;

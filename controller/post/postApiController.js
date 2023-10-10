const PostService = require('../../service/posts/postService');

/* exports.getPost = async (req, res, next) => {
  let { postId } = req.params;
  try {
    let rows = await PostService.getPost(postId);
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
}; */

exports.getPosts = async (req, res, next) => {
  let { offset, limit } = req.query;
  const offsetValue = parseInt(offset);
  const limitValue = parseInt(limit);
  try {
    let posts = await PostService.getPosts(offsetValue, limitValue);
    return res.json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.getPostTotal = async (req, res, next) => {
  try {
    let total = await PostService.getPostTotal();
    return res.json(total);
  } catch (err) {
    return res.status(500).json(err);
  }
};

/* exports.createPost = async (req, res, next) => {
  let post = req.body;
  try {
    let postId = await PostService.insertPost(post);
    return res.json({ postId });
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updatePost = async (req, res, next) => {
  let { postId } = req.params;
  let { title, content } = req.body;
  try {
    let affectedRows = await PostService.updatePost(postId, title, content);
    return res.json({ affectedRows });
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deletePost = async (req, res, next) => {
  let { postId } = req.params;
  try {
    let affectedRows = await PostService.deletePost(postId);
    return res.json({ affectedRows });
  } catch (err) {
    return res.status(500).json(err);
  }
};
 */
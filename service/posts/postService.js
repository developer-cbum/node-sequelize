const {tbl_post, tbl_member} = require('../../models/index');

exports.getPost = async (postId) => {
  try {
    let data = await tbl_post.findOne({
      where: {
        post_id : postId,
      },
      include : [
        {
        model : tbl_member,
        attributes : ['member_name']
        }
      ],
    });

    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

exports.getPosts = async (offset, limit) => {
  try {
    let data = await tbl_post.findAll({
      attributes: ['post_id','post_title', "create_date"],
      include : [
        {
         model : tbl_member,
         attributes : ['member_name']
        }
      ],
      // include : [tbl_member],
      offset : offset,
      limit : limit,
    });
    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

exports.getPostTotal = async () => {
  try {
    let data = await tbl_post.count();
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};



/* 
exports.insertPost = async (post) => {
  try {
    let result = await pool.query(PostQuery.insertPost, post);
    return result.insertId;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

exports.updatePost = async (postId, title, content) => {
  try {
    let result = await pool.query(PostQuery.updatePost, [title, content, postId]);
    return result.affectedRows;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

exports.deletePost = async (postId) => {
  try {
    let result = await pool.query(PostQuery.deletePost, [postId]);
    return result.affectedRows;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};
 */
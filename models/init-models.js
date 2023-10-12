var DataTypes = require("sequelize").DataTypes;
var _tbl_file = require("./tbl_file");
var _tbl_member = require("./tbl_member");
var _tbl_post = require("./tbl_post");

function initModels(sequelize) {
  var tbl_file = _tbl_file(sequelize, DataTypes);
  var tbl_member = _tbl_member(sequelize, DataTypes);
  var tbl_post = _tbl_post(sequelize, DataTypes);

  tbl_post.belongsTo(tbl_member, { as: "member", foreignKey: "member_id"});
  tbl_member.hasMany(tbl_post, { as: "tbl_posts", foreignKey: "member_id"});
  tbl_file.belongsTo(tbl_post, { as: "post", foreignKey: "post_id"});
  tbl_post.hasMany(tbl_file, { as: "tbl_files", foreignKey: "post_id"});

  return {
    tbl_file,
    tbl_member,
    tbl_post,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const tbl_post = sequelize.define('tbl_post', {
    post_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    post_content: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    post_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tbl_member',
        key: 'member_id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
      {
        name: "member_id",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });

  tbl_post.belongsTo(sequelize.models.tbl_member, {
    foreignKey: 'member_id',
  });

  return tbl_post;

};

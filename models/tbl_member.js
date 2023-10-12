const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const tbl_member = sequelize.define('tbl_member', {
    member_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    member_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    member_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    member_password: {
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
    }
  }, {
    sequelize,
    tableName: 'tbl_member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });

    tbl_member.associate = (models) => {
      tbl_member.hasMany(models.tbl_post, {
        foreignKey: 'member_id',
      });
    };

    return tbl_member;
};
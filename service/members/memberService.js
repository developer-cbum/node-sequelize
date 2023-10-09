const {tbl_member} = require('../../models/index');

/* exports.getMember = async (memberId) => {
  try {
    let data = await pool.query(MemberQuery.getMember, [memberId]);
    return data[0];
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}; */

exports.checkMember = async (memberEmail) => {
  try {
    let data = await tbl_member.findAll({
        where: {
          member_email : memberEmail,
      },
    })
    return data[0];
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
}; 

/* exports.loginMember = async (memberEmail, memberPassword) => {
  try {
    let data = await pool.query(MemberQuery.loginMember, [memberEmail,memberPassword]);
    return data[0];
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};
*/
 
exports.insertMember = async (member) => {
  try {
    let result = await tbl_member.create(member);
    return result.insertId;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

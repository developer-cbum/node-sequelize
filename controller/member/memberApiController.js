const MemberService = require('../../service/members/memberService');

/* exports.getMember = async (req, res, next) => {
  let { memberId } = req.params;
  try {
    let rows = await MemberService.getMember(memberId);
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};
 */
exports.loginMember = async (req, res, next) => {
  let { memberEmail,memberPassword } = req.body;
  try {
    let row = await MemberService.loginMember(memberEmail,memberPassword);
    req.session.memberId =row.dataValues.member_id;
    if(req.session.loginCheck){
      row.dataValues.loginCheck = req.session.loginCheck;
       delete req.session.loginCheck;
    }
    return res.json(row);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.checkMember = async (req, res, next) => {
  let { memberEmail } = req.body;
  try {
    let rows = await MemberService.checkMember(memberEmail);
    return rows ? res.json(rows.dataValues) : res.json([]);
  } catch (err) {
    return res.status(500).json(err);
  }
}; 

exports.createMember = async (req, res, next) => {
  let member = req.body;
  try {
    let memberId = await MemberService.insertMember(member);
    return res.json({ member });
  } catch (err) {
    return res.status(500).json(err);
  }
};

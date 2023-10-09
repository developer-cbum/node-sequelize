const express = require('express');
const router = express.Router();
const MemberController = require('../controller/member/memberController');
const MemberApiController = require('../controller/member/memberApiController');

router.get('/login', MemberController.goToLoginForm);
router.get('/logout', MemberController.logout);
router.get('/join', MemberController.goToJoinForm);

/* api */
// router.get('/api/member/:memberId', MemberApiController.getMember);
router.post('/api/member', MemberApiController.createMember);
router.post('/api/member/check', MemberApiController.checkMember);
router.post('/api/member/login', MemberApiController.loginMember);

module.exports = router;

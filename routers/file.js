const express = require('express');
const { v4: uuid } = require("uuid");
const router = express.Router();
const multer = require("multer");
const fileApiController = require('../controller/file/fileApiController');

/* const upload = multer({ dest: 'C:/uploads', limits: { fileSize: 5 * 1024 * 1024 } });

 */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'C:/uploads') // 파일이 저장되는 경로입니다.
    },
    filename: function (req, file, cb) {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
      cb(null, `${uuid()}_`+file.originalname) // 저장되는 파일명
    },
  })

  const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } })

// 다중 파일 업로드
router.post('/api/upload', upload.array('file'), (req, res, next) => {
    req.files.map((data) => {
        console.log(data);
    });
    
    res.status(200).send({
        message: "Ok",
        uuid : uuid(),
        fileInfo: req.files
    })
});


/* api */
// router.get('/api/member/:memberId', MemberApiController.getMember);
// router.post('/api/member', MemberApiController.createMember);
// router.post('/api/member/check', MemberApiController.checkMember);
// router.post('/api/member/login', MemberApiController.loginMember);

module.exports = router;
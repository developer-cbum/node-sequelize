
exports.goToList = function (req, res, next) {
    res.render('index', { title: 'main', memberId : req.session.memberId });
};

exports.goToWrite = function (req, res, next) {
  if(req.session.memberId === undefined){
    req.session.loginCheck = true;
    res.redirect('/login');
  }else{
    res.render('posts/write', { title: 'write', memberId : req.session.memberId });
  }
};

exports.goToDetail = function (req, res, next) {
    res.render('posts/detail', { title: 'detail', memberId : req.session.memberId , postId : req.params.postId });
};
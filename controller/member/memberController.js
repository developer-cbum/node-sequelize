exports.goToJoinForm = function (req, res, next) {
  if (req.session.memberId !== undefined) {
    res.redirect('/');
  } else {
    res.render('members/join', { title: 'join' });
  }
};

exports.logout = function (req, res, next) {
  delete req.session.memberId
  res.redirect('/login');
};

exports.goToLoginForm = function (req, res, next) {
  if (req.session.memberId !== undefined) {
    res.redirect('/');
  }else {
    res.render('members/login', { title: 'login' });
  }
};

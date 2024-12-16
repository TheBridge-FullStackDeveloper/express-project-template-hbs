function isAdmin(req, res, next) {
  if (req.user.role === 'ADMIN') {
    return next();
  }

  res.redirect('/');
}

module.exports = isAdmin;

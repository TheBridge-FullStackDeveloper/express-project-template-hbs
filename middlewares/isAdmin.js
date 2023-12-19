function isAdmin(req, res, next) {
  if (req.user?.isAdmin) {
    return next();
  }

  res.redirect('/');
}

module.exports = isAdmin;

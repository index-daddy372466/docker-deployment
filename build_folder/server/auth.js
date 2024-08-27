const checkAuthenticated = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/login");
    }
  };
  const checkNotAuthenticated = (req, res, next) => {
    if (!req.user) {
      next();
    } else {
      res.redirect("/home");
    }
  };

  module.exports = { checkAuthenticated, checkNotAuthenticated }
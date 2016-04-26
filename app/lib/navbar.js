'use strict';
/**
 * @module lib/navbar
 **/

/**
 * Load navbar template variable with text and links.
 * @function
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @param {Function} next - Next middleware function.
 */
module.exports = (req, res, next) => {
  res.locals.navbar = {};
  if (req.user) {
    res.locals.navbar.left = [
      { text: 'Play', href: 'play' },
    ];
    res.locals.navbar.right = [
      { text: `Hello ${req.user.displayName}`, href: '' },
      { text: 'Log Out', href: 'logout' },
    ];
  } else {
    res.locals.navbar.left = [];
    res.locals.navbar.right = [
      { text: 'Log In', href: 'login' },
      { text: 'Sign Up', href: 'signup' },
    ];
  }
  next();
};

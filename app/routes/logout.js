'use strict';
/**
 * @module routes/logout
 * @description ExpressJS route for logout page.
 **/
const express = require('express');
const config = require('config');

const router = new express.Router();


// TODO: We also need to invalidate the token instead of just instructing the
// browser to delete it.


/**
 * GET logout page.
 *
 * Log user out and redirect to the homepage.
 * @function
 * @name /logout
 */
router.get('/', (req, res) => {
  res.clearCookie(config.jwtCookieName);
  res.redirect('/');
});


/**
 * GET logout page.
 *
 * Log user out and redirect to the homepage.
 * @function
 * @name /logout
 */
router.post('/', (req, res) => {
  res.clearCookie(config.jwtCookieName);
  res.redirect('/');
});


module.exports = router;

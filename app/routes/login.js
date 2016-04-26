'use strict';
/**
 * @module routes/login
 * @description ExpressJS route for login page.
 **/
const express = require('express');
const _ = require('underscore');
const httpError = require('http-error');
const packageConfig = require('packageConfig');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');


const router = new express.Router();


/**
 * @typedef BasicData
 * @type Object
 * @property {String} title - The page title.
 * @property {String} signupURL - URL of signup page.
 * @property {String} loginURL - URL of login page.
 */

/**
 * Return basic data for template.
 * @return {BasicData}
 */
function getData() {
  return {
    title: packageConfig.name,
    signupURL: 'signup',
    loginURL: 'login',
  };
}


/**
 * Return prefill object for template.
 * @param {Object} err - Error object.
 * @param {Object} post - Object containing parsed form fields.
 * @return {Object} - Filled form fields (excluding the password field).
 */
function getPrefill(err, post) {
  const prefill = {};
  let keys = _.difference(Object.keys(post), Object.keys(err));
  keys = _.without(keys, 'password');
  keys.forEach((key) => {
    prefill[key] = post[key];
  });
  return prefill;
}


/**
 * Re-render page with flash messages (saves form fields).
 * @param {Object[]} err - Error object.
 * @param {String} err.msg - Message to display.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */
function flashError(err, req, res) {
  const data = getData();
  data.prefill = getPrefill(err, req.body);
  data.flash = {
    type: 'alert-danger',
    messages: err,
  };
  res.render('login', data);
}


/**
 * Generate JSON Web Token and store in cookie.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @param {Function} next - Generic callback.
 * @param {module:models/user~User} user - Database user object.
 */
function generateJWT(req, res, next, user) {
  const options = {
    algorithm: config.jwtAlgorithm,
    expiresIn: config.jwtExpireTime,
  };
  const payload = user._doc;
  delete payload.__v;
  delete payload._id;
  delete payload.password;
  jwt.sign(payload, config.jwtSecret, options, (token) => {
    const time = new Date();
    const expire = new Date(time.getTime() + (1000 * config.jwtExpireTime));
    res.cookie(config.jwtCookieName, token, { expire });
    next();
  });
}


/**
 * Login user who sent request.
 *
 * Username and password given in request object.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @param {Function} next - Generic callback.
 */
function login(req, res, next) {
  User.findOne({ username: req.body.username }, (err, user) => {
    // database error
    if (err) {
      next(err);
    }
    // TODO: Both failure conditions should return a generic no-combination
    // message and should take the same amount of time for security reasons.
    if (!user) {
      flashError([{ msg: 'No user by that name exists.' }], req, res);
      return;
    }
    user.checkPassword(req.body.password, (passwordMatch) => {
      if (!passwordMatch) {
        flashError([{ msg: 'Incorrect password.' }], req, res);
        return;
      }
      generateJWT(req, res, next, user);
    });
  });
}


/**
 * GET login page.
 *
 * Can only respond to HTML request.
 * @function
 * @name /login
 */
router.get('/', (req, res, next) => {
  res.format({
    'text/html'() {
      res.render('login', getData());
    },
    'default'() {
      // log the request and respond with 406
      next(httpError(406));
    },
  });
});


/**
 * POST login page.
 *
 * This logs in the username/password combination given in the request body.
 * @function
 * @name /login
 */
router.post('/', (req, res, next) => {
  login(req, res, (err) => {
    if (err) {
      console.error(err);
      next(httpError(500));
    } else {
      res.redirect('/');
    }
  });
});


module.exports = router;

'use strict';
/**
 * @module models/user
 * @description Exports User database model.
 **/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('config');
const bcrypt = require('bcrypt');


// make user schema
const userSchema = new Schema({
  displayName: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    set(v) {
      return v.toLowerCase();
    },
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  created: Date,
  updated: Date,
});


/**
 * Set password of user asynchronously.
 * @function setPassword
 * @memberof module:models/user~User
 * @param {String} password - Plain text password.
 * @param {Function} next - Generic next callback.
 */
userSchema.methods.setPassword = function setPassword(password, next) {
  bcrypt.hash(password, config.bcryptStrength, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      this.password = res;
      next();
    }
  });
};


/**
 * Set password of user synchronously.
 * @function setPasswordSync
 * @memberof module:models/user~User
 * @param {String} password - Plain text password.
 */
userSchema.methods.setPasswordSync = function setPasswordSync(password) {
  this.password = bcrypt.hashSync(password, config.bcryptStrength);
};


/**
 * Check password callback.
 * @callback module:models/user~User~checkPasswordCallback
 * @param {Bool} res - True if password matches.
 */

/**
 * Verify password of user asynchronously.
 * @function checkPassword
 * @memberof module:models/user~User
 * @param {String} password - Plain text password.
 * @param {module:models/user~User~checkPasswordCallback} next - Response
 *                                                               callback.
 */
userSchema.methods.checkPassword = function checkPassword(password, next) {
  bcrypt.compare(password, this.password, (err, res) => {
    if (err) {
      console.log(err);
    }
    next(res);
  });
};


/**
 * Verify password of user synchronously.
 * @function checkPasswordSync
 * @memberof module:models/user~User
 * @param {String} password - Plain text password.
 * @return {Bool} - True if password matches.
 */
userSchema.methods.checkPasswordSync = function checkPasswordSync(password) {
  return bcrypt.compareSync(password, this.password);
};


// ran before saving user
// NOTE: Cannot use arrow function here as bind is called.
userSchema.pre('save', function preSave(next) {
  const currentDate = new Date();
  this.updated = currentDate;
  if (!this.created) {
    this.created = currentDate;
  }
  next();
});


/**
 * Make new user.
 * @constructor
 * @param {Object} data - Initial user data.
 * @param {String} data.displayName - User display name.
 * @param {String} data.username - Username.
 * @param {String} data.password - Hashed password.
 * @param {String} data.email - Email address.
 * @param {Bool} data.admin - Is user an administrator.
 * @param {Date} data.created - Date user was created.
 * @param {Date} data.updated - Date user was last updated.
 * @return {User} - New user model.
 */
const User = mongoose.model('User', userSchema);


// export the model
module.exports = User;

'use strict';
/**
 * @module lib/http-error
 **/

const HttpStatus = require('http-status-codes');

/**
 * Return error based on HTTP status code.
 *
 * @param {Number} code - HTTP status code.
 * @return {Object} - Error object with HTTP status code and message.
 */
module.exports = (code) => {
  const err = new Error(HttpStatus.getStatusText(code));
  err.status = code;
  return err;
}

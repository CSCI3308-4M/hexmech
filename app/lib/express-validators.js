'use strict';
/**
 * @module lib/express-validators
 * @description Custom express validator data structure.
 **/

/**
 * @namespace customValidators
 * @property {Object} customValidators - Custom made ExpressJS form validators.
 * @property {Object} customValidators.username - Username validator.
 */
module.exports = {
  customValidators: {
    /**
     * Validate username.
     * @param {String} value - String to evaluate.
     * @return {Bool} - False if value contains spaces.
     */
    username(value) {
      return !/\s/.test(value);
    },
  },
};

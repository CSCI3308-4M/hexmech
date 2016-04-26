'use strict';
/**
 * @module routes/play
 * @description ExpressJS route for the HexMech game.
 **/
const express = require('express');
const httpError = require('http-error');
const router = new express.Router();

/**
 * GET game page.
 *
 * Can only respond to HTML.
 * @function
 * @name /play
 */
router.get('/', (req, res, next) => {
  // display home page
  res.format({
    'text/html'() {
      res.render('play');
    },
    default() {
      // log the request and respond with 406
      next(httpError(406));
    },
  });
});

module.exports = router;

'use strict';
/**
 * @module lib/config
 * @description Parses config file and exports an Object representation.
 **/

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json'));
module.exports = config;

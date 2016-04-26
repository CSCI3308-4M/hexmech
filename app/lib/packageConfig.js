'use strict';
/**
 * @module lib/packageConfig
 * @description Parses package file and exports an Object representation.
 **/

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./package.json'));
module.exports = config;

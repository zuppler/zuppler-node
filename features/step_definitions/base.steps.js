'use strict';

var assert = require('assert');
var zuppler = require('../../index')('zuppler','secret')

module.exports = function() {
    var restaurant;

    this.Given(/^Zuppler configured with "([^"]*)" and "([^"]*)"$/, function (key, secret, callback) {
	// console.log('Version: ' + zuppler.version())
	callback()
    })
}

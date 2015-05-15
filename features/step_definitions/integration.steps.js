'use strict';

var assert = require('assert');
var zuppler = require('../../index')('demorestaurant','secret')

module.exports = function() {
    var integrations;
    
    this.When(/^I find integrations for channel$/, function (callback) {
	zuppler.integrations().find(function(error, data){
	    integrations = data
	    callback()
	})
    });

    this.Then(/^I should have (\d+) integrations$/, function (count, callback) {
	assert.equal(count, integrations.length)
	callback();
    });
}

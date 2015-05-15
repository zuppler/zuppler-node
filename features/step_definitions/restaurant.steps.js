'use strict';

var assert = require('assert');
var zuppler = require('../../index')('zuppler','secret')

module.exports = function() {
    var restaurant;

    this.When(/^I find restaurant "([^"]*)"$/, function (id, callback) {
	zuppler.restaurants().find(id, function(error, r){
	    restaurant = r
	    callback()
	})
    })

    this.Then(/^I should have "([^"]*)" restaurant$/, function (id, callback) {
	assert.equal(id, restaurant['restaurant']['permalink'])
	callback()
    })
}

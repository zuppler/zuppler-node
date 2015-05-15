var request = require('request')

function Restaurants(zuppler) {
    this.base_url = function(id) {
	return zuppler.api_url() + '/channels/' + zuppler.channel + '/restaurants/' + id;
    }
    this.restaurant_url = function(id) {
	return this.base_url(id) + '.json'
    }
    this.action_url = function(id, action) {
	return this.base_url(id) + '/' + action + '.json';
    }

    this.find = function(id, callback) {
	url = this.restaurant_url(id);
	request.get(url, function (error, response, body) {
	    // TODO: check success field in JSON
	    if (!error && response.statusCode == 200) {
		callback(error, JSON.parse(body))
	    } else {
		callback(error, null)
	    }
	})
    }
}

function initializer(zuppler) {
    return new Restaurants(zuppler);
}

module.exports = initializer

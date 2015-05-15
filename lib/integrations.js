var request = require('request')

function Integrations(zuppler) {
    this.channel_url = function() {
	return zuppler.api_url() + '/channels/' + zuppler.channel
    }
    this.integrations_url = function() {
	return this.channel_url() + '/integrations.json'
    }

    this.find = function(callback) {
	url = this.integrations_url();
	request.get(url, function (error, response, body) {
	    // TODO: check success field in JSON
	    if (!error && response.statusCode == 200) {
		callback(error, JSON.parse(body)['integrations'])
	    } else {
		callback(error, null)
	    }
	})
    }
}

function initializer(zuppler) {
    return new Integrations(zuppler);
}

module.exports = initializer

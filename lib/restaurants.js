var request = require('request')

var server = 'http://restaurants.api.biznettechnologies.com'
var version = '/v3'

function Restaurants() {
    this.find = function(id, callback) {
	var url = server + version + '/channels/zuppler/restaurants/' + id + '.json'
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
		callback(error, JSON.parse(body))
	    } else {
		callback(error, null)
	    }
	})
    }
}

module.exports = new Restaurants()

function Zuppler(channel, secret) {
    this.version = function() {
	// TODO: remove hardcoded, read version from config file
	return '0.1.0';
    };
    this.restaurants = function() {
	return require('./restaurants');
    }
}

function initializer(channel, secret) {
    return new Zuppler(channel, secret)
}

module.exports = initializer

function Zuppler(channel, secret) {
    this.channel = channel;
    this.secret = secret;

    this.version = function() {
	// TODO: remove hardcoded, read version from config file
	return '0.1.0';
    };

    // APIs
    this.api_server = function() {
	// TODO: use test/prod servers
	return 'http://restaurants.api.biznettechnologies.com'
    }
    this.api_version = function() {
	return '/v3'
    }
    this.api_url = function() {
	return this.api_server() + this.api_version();
    }

    // modules
    this.restaurants = function() {
	return require('./restaurants')(this);
    }
    this.integrations = function() {
	return require('./integrations')(this);
    }
}

function initializer(channel, secret) {
    return new Zuppler(channel, secret)
}

module.exports = initializer

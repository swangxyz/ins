var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: 3000,
    db: 'localhost',
    clientSecret: process.env.clientSecret || 'a9bd8a1b2d974c928b4fc1797339bdc8',
	tokenSecret: process.env.tokenSecret || 'this is a volleyball.'
  },

  test: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: 3000,
    db: 'mongodb://localhost/server-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: 3000,
    db: 'mongodb://localhost/server-production'
  }
  


};

module.exports = config[env];

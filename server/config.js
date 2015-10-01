var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ins-server'
    },
    port: 3000,
    db: 'mongodb://hackhands:hackhands@ds063140.mongolab.com:63140/instagram',
    clientSecret: process.env.clientSecret || 'a9bd8a1b2d974c928b4fc1797339bdc8',
    tokenSecret: process.env.tokenSecret || 'this is a volleyball.'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ins-server'
    },
    port: 3000,
    db: 'mongodb://hackhands:hackhands@ds063140.mongolab.com:63140/instagram',
        clientSecret: process.env.clientSecret || 'a9bd8a1b2d974c928b4fc1797339bdc8',
    tokenSecret: process.env.tokenSecret || 'this is a volleyball.'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ins-server'
    },
    port: 3000,
    db: 'mongodb://hackhands:hackhands@ds063140.mongolab.com:63140/instagram',
    clientSecret: process.env.clientSecret || 'a9bd8a1b2d974c928b4fc1797339bdc8',
    tokenSecret: process.env.tokenSecret || 'this is a volleyball.'
  }



};

module.exports = config[env];

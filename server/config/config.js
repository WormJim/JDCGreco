let _ = require('lodash');

let config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  database: {
    mongo: 'mongodb+srv://user:pass@lawnsprinkers-xt6ng.mongodb.net/dbName',
    user: 'grahn',
    pass: 'C!O10|g28N',
    dbName: 'lawn',
    useNewUrlParser: true
  }
};

// Set node evnironment to dev if not already set
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

// set config.env to node_env
config.env = process.env.NODE_ENV;

let envConfig;

module.exports = _.merge(config, envConfig);

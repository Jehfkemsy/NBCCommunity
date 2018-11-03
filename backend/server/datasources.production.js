'use strict';
var envs = require('./env.js');

module.exports = {
  db: {
    url: envs.dbUrl,
    port: 27017,
    database: 'db',
    name: 'db',
    connector: 'mongodb',
    username: envs.dbUser,
    password: envs.dbPW,
  },
};

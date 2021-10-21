'use strict';

const app = require('./src/server.js');
const { db } = require('./src/models');

const port = process.env.PORT || 3000;

db.sync().then(() => {
  app.start(port);
});

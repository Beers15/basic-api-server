'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(app.app);

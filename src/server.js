'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const _404 = require('./error-handlers/404'); 
const _500 = require('./error-handlers/500'); 

const foodRoutes = require('./routes/food');
const clothingRoutes = require('./routes/clothing');

app.use(express.json());
app.use(logger);
app.use(validator);
app.use('/food', foodRoutes);
app.use('/clothing', clothingRoutes);

app.use(_404);
app.use(_500);

module.exports = {
  app,
  start: (port) => app.listen(port, console.log(`Server running on port ${port}`)),
};
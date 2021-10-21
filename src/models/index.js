'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const FoodModel = require('./food.js');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const options = process.env.NODE_ENV === 'production' 
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  } : {};

// actually connecting to a running database / or just use sqlite
const sequelizeInstance = new Sequelize(DATABASE_URL, options);
// is ready to consume models so that it can either validate that tables exist, or create those tables.

const FoodTable = FoodModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  Food: FoodTable,
};
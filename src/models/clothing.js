'use strict';

// this defines a whole table, and each column of that table
const Clothing = (sequelize, DataTypes) => sequelize.define('Clothing', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
// this will use an incremented ID of type number, as the primary unless specified.

module.exports = Clothing;

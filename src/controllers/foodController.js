const { Food } = require('../models');

module.exports.create = async function(req, res) {
  try {
    let newFood = await Food.create({
      title: req.body.title,
      description: req.body.description,
    });

    res.status(201).send(newFood);
  } catch(err) {
    res.send(err);
  }
};

module.exports.getAllRecords = async function(req, res) {
  try {
    let allFoodItems = await Food.findAll();

    res.status(200).send(allFoodItems);
  } catch(err) {
    res.send(err);
  }
};

module.exports.getRecord = async function(req, res) {
  try {
    const foodItem = await Food.findByPk(req.params.id);
    if(!foodItem) {
      return res.status(404).send(foodItem);
    }
    res.status(200).send(foodItem);
  } catch(err) {
    res.send(err);
  }
};

module.exports.edit = async function(req, res) {
  try {
    const foodItem = await Food.findByPk(req.params.id);

    foodItem.title = req.body.title;
    foodItem.description = req.body.description;
    foodItem.save();

    res.status(200).send(foodItem);
  } catch(err) {
    res.send(err);
  }
};

module.exports.destroy = async function(req, res) {
  try {

    const foodItem = await Food.findByPk(req.params.id);
    const res = await foodItem.destroy();

    res.send(res);
  } catch(err) {
    res.send(err);
  }
};

const { Clothing } = require('../models');

module.exports.create = async function(req, res) {
  try {
    let newClothing = await Clothing.create({
      title: req.body.title,
      description: req.body.description,
    });

    res.status(201).send(newClothing);
  } catch(err) {
    res.send(err);
  }
};

module.exports.getAllRecords = async function(req, res) {
  try {
    let allClothingItems = await Clothing.findAll();

    res.status(200).send(allClothingItems);
  } catch(err) {
    res.send(err);
  }
};

module.exports.getRecord = async function(req, res) {
  try {
    const clothingItem = await Clothing.findByPk(req.params.id);
    if(!clothingItem) {
      return res.status(404).send(clothingItem);
    }
    res.status(200).send(clothingItem);
  } catch(err) {
    res.send(err);
  }
};

module.exports.edit = async function(req, res) {
  try {
    const clothingItem = await Clothing.findByPk(req.params.id);

    clothingItem.title = req.body.title;
    clothingItem.description = req.body.description;
    clothingItem.save();

    res.status(200).send(clothingItem);
  } catch(err) {
    res.send(err);
  }
};

module.exports.destroy = async function(req, res) {
  try {

    const clothingItem = await Clothing.findByPk(req.params.id);
    const res = await clothingItem.destroy();

    res.send(res);
  } catch(err) {
    res.send(err);
  }
};

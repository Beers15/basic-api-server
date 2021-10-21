const express = require('express');
const router = express.Router();

const clothingController = require('../controllers/clothingController');

router.get('/', clothingController.getAllRecords);

router.get('/:id', clothingController.getRecord);

router.post('/', clothingController.create);

router.put('/:id', clothingController.edit);

router.delete('/:id', clothingController.destroy);

module.exports = router;
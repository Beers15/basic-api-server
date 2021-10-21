const express = require('express');
const router = express.Router();

const foodController = require('../controllers/foodController');

router.get('/', foodController.getAllRecords);

router.get('/:id', foodController.getRecord);

router.post('/', foodController.create);

router.put('/:id', foodController.edit);

router.delete('/:id', foodController.destroy);

module.exports = router;
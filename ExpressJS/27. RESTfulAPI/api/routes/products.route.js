const express = require('express');

const controller = require('../controllers/products.controller')

const router = express.Router();

router.get('/', controller.index);

router.post('/', controller.create);

router.put('/', controller.put);

router.patch('/', controller.patch);

router.delete('/', router.delete);

module.exports = router;
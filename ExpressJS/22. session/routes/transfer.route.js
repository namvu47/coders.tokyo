const express = require('express');

const controller = require('../controllers/transfer.controller.js');

const router = express.Router();

router.get('/', controller.sendMoney);
router.post('/', controller.postCreate);

module.exports = router; 
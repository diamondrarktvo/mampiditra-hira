const express = require('express');

const router = express.Router();

const musicController = require('../controllers/musicController');

router.get('/', musicController.searchMusic);

module.exports = router;
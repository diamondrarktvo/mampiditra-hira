const express = require('express');

const router = express.Router();

const musicController = require('../controllers/musicController');

router.post('/search', musicController.searchMusic);

module.exports = router;
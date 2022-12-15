const express = require('express');

const router = express.Router();

const musicController = require('../controllers/musicController');

router.post('/search', musicController.searchMusic);
router.post('/convert', musicController.downloadMP3);

module.exports = router;
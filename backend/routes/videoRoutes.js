const express = require('express');
const router = express.Router();
const { uploadVideo, getVideosByCategory } = require('../controllers/videoController');

router.post('/upload', uploadVideo);
router.get('/:category', getVideosByCategory);

module.exports = router;

const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: String,
    category: String,
    videoUrl: String
});

module.exports = mongoose.model('Video', videoSchema);

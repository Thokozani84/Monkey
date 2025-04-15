const Video = require('../models/Video');

// POST a new video
exports.uploadVideo = async (req, res) => {
    const { title, category, videoUrl } = req.body;

    try {
        const video = new Video({ title, category, videoUrl });
        await video.save();
        res.status(201).json(video);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET videos by category
exports.getVideosByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const videos = await Video.find({ category });
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const videoRoutes = require('./routes/videoRoutes');
const port = process.env.PORT || 5000
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/videos', videoRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => console.log('Server running on http://localhost:5000'));
}).catch(err => console.error(err));

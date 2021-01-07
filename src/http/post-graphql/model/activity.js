const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    tags: [{
        type: String
    }],
    url: {
        type: String
    }
});

module.exports = activitySchema;


const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    urls: [{
        type: String
    }]
});

module.exports = activitySchema;


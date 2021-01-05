const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    about: [{
        type: String
    }],
    aboutImage: {
        type: String
    }
});

module.exports = aboutSchema;


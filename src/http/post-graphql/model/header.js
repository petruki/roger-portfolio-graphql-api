const mongoose = require('mongoose');

const headerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    avatarImg: {
        type: String
    },
    headerTagline: [{
        type: String
    }],
    headerParagraph: {
        type: String
    },
    contactEmail: {
        type: String
    }
});

module.exports = headerSchema;


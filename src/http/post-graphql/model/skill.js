const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    img: {
        type: String
    },
    para: {
        type: String
    },
    references: [{
        title: {
            type: String
        },
        description: {
            type: String
        },
        link: {
            type: String
        }
    }]
});

module.exports = skillSchema;


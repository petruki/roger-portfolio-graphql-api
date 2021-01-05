const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    title: {
        type: String
    },
    para: {
        type: String
    },
    imageSrc: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = workSchema;


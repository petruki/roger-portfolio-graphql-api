const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactSubHeading: {
        type: String
    },
    social: [{
        img: {
            type: String
        },
        url: {
            typr: String
        }
    }]
});

module.exports = contactSchema;


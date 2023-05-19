const mongoose = require('mongoose');
const aboutSchema = require('./about');
const activitySchema = require('./activity');
const contactSchema = require('./contact');
const headerSchema = require('./header');
const skillSchema = require('./skill');
const workSchema = require('./work');

const portfolioSchema = new mongoose.Schema({
    version: {
        type: Number
    },
    header: headerSchema,
    work: [workSchema],
    about: aboutSchema,
    skills: [skillSchema],
    contact: contactSchema,
    activity: activitySchema
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;


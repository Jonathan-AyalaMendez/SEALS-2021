const mongoose = require('mongoose');
const mongoose = require('mongoose');

const Journal = new mongoose.Schema({
    title: String,
    author: String,
    content: String
}, { timestamps: true });

const journalModel = mongoose.model('journal-seals', Journal);

module.exports = journalModel;
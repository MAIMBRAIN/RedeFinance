const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    occurance: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('expense', expenseSchema);
const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema(
{
    reason: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('income', incomeSchema);
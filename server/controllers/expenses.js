const Expense = require('../models/expense.js');
const mongoose = require('mongoose');
const mongodb = require('mongodb')

module.exports = {
    // create new expense
    create: async (req, res) => {
        try {
            const expense = Expense.create(req.body);
            res.json({
                success: true,
                message: "New expense created",
                expense
            });
        } catch (err) {
            res.json({
                success: false,
                code: err.code
            });
        }
    },

    // show all expenses
    index: async (req, res) => {
        Expense.find({}, (err, expense) =>
        {
            if(err){ res.send(err) }
            res.json(expense)
        })
    },

    // delete an expense
    destroy: async (req, res) => {
        Expense.deleteOne({_id: req.params.id}, (err, expense) => {
            if (err) {
                res.send(err)
            }
            res.json(expense)
            console.log(req.params.id)
        })
    }
};
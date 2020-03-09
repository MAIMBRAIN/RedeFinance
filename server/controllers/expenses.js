const Expense = require('../models/expense.js');

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

    // show variable-rate expenses
    variable: async (req, res) => {
        try {
            const expense = Expense.find({
                type: "variable-rate"
            });
            res.json(expense);
        } catch (err) {
            alert(err);
        }
    },

    // show flat-rate expenses
    flat: async (req, res) => {
        try {
            const expense = Expense.find({
                type: "flat-rate"
            });
            res.json(expense);
        } catch (err) {
            alert(err);
        }
    },

    // delete an expense
    destroy: async (req, res) => {
        try {
            const expense = await Expense.findByIdAndRemove(req.params.id);
            res.json({
                success: true,
                message: "Expense deleted",
                expense
            });
        } catch (err) {
            res.json({
                success: false,
                code: err.code
            });
        }
    }
};
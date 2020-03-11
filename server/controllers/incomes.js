const Income = require('../models/income');

module.exports = {
    // Create new Income
    create: async (req, res) => {
        try {
            const income = Income.create(req.body);
            res.json({
                success: true,
                message: 'New Income created',
                income
            });
        } catch (err) {
            res.json({
                success: false,
                code: err.code
            });
        }
    },

    // Show all Incomes
    index: async (req, res) => {
        Income.find({}, (err, income) =>
        {
            if(err){res.send(err)}
            res.json(income)
        });
    },

    // Delete an Income
    destroy: async (req, res) => {
        Income.deleteOne({_id: req.params.id}, (err, income) =>
        {
            if (err) {res.send(err)}
            res.json(income)
        })
    }
}